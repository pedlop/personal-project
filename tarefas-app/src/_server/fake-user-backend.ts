import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeUserBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

    // 'array' no 'local storage' para registrar os usuarios
    let usuarios: any[] = JSON.parse(localStorage.getItem('usuarios')) || [];

    // configuração do 'fake backend'
    backend.connections.subscribe((connection: MockConnection) => {

        // colocar um tempo no 'timeout' para simular a chamada de 'api' no servidor 
        setTimeout(() => {

            // autenticar
            if (connection.request.url.endsWith('api/autenticar') && connection.request.method === RequestMethod.Post) {
                // 'get' parametros da request do 'post'
                let params = JSON.parse(connection.request.getBody());

                // encontra se qualque usuario combina com as credenciais do login
                let usuariosFiltrados = usuarios.filter(usuario => {
                    return usuario.username === params.username && usuario.senha === params.senha;
                });

                if (usuariosFiltrados.length) {
                    // se os detalhes do 'login' são verdadeiros retona 200 OK com os detalhes do usuario e o falso token jwt 
                    let usuario = usuariosFiltrados[0];
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            id: usuario.id,
                            username: usuario.username,
                            nome: usuario.nome,
                            sobrenome: usuario.sobrenome,
                            token: 'fake-jwt-token'
                        }
                    })));
                } else {
                    // se não retorna 400 'bad request''
                    connection.mockError(new Error('O nome de usuario ou a senha está incorreta.'));
                }

                return;
            }

            // 'get' usuarios
            if (connection.request.url.endsWith('api/usuarios') && connection.request.method === RequestMethod.Get) {
                // verifica o falso token de autenticação na 'header' e retorna usuarios se for válido, esta segurança é implementada no lado do servidor em aplicação real
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: usuarios })));
                } else {
                    // retorna 401 'not authorise' se o 'token' for 'null' ou inválido
                    connection.mockRespond(new Response(new ResponseOptions({ status:401 })));
                }

                return;
            }

            // 'get' usuarios pelo id
            if (connection.request.url.match(/\/api\/usuarios\/\d+$/) && connection.request.method === RequestMethod.Get) {
                // verifica o falso token de autenticação na 'header' e retorna usuário, se for válido, esta segurança é implementada no lado do servidor em aplicação real
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // encontra usuario pelo id no 'array'dos usuarios
                    let parteUrl = connection.request.url.split('/');
                    let id = parseInt(parteUrl[parteUrl.length - 1]);
                    let usuariosEncontrados = usuarios.filter(usuario => { return usuario.id === id });
                    let usuario = usuariosEncontrados.length ? usuariosEncontrados[0] : null;
                    
                    // retorna 200 OK com o usuario
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: usuario })));
                } else {
                    // retorna 401 'not authorise'
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }

                return;
            }

            // criar usuario
            if (connection.request.url.endsWith('api/usuarios') && connection.request.method === RequestMethod.Post) {
                // pega novo objeto de usuario pelo 'post'no body
                let novoUsuario = JSON.parse(connection.request.getBody());

                // valida este novo usuario
                let usuarioDuplicado = usuarios.filter(usuario => { return usuario.username === novoUsuario.username; }).length
                if (usuarioDuplicado) {
                    return connection.mockError(new Error('Nome de usuário "' + novoUsuario.username + '" já está sendo usado.'));
                }

                // salva novo usuario
                novoUsuario.id = usuarios.length + 1;
                usuarios.push(novoUsuario);
                localStorage.setItem('usuarios', JSON.stringify(usuarios));

                // retorna 200
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));

                return;
            }

            // deletar usuario
            if (connection.request.url.match(/\/api\/usuarios\/\d+$/) && connection.request.method === RequestMethod.Delete) {
                // verifica o falso token de autenticação na 'header' e retorna usuário, se for válido, esta segurança é implementada no lado do servidor em aplicação real
                if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find usuario pelo id no 'array' de usuarios
                    let parteUrl = connection.request.url.split('/');
                    let id = parseInt(parteUrl[parteUrl.length - 1]);
                    for (let i = 0; i < usuarios.length; i++) {
                        let usuario = usuarios[i];
                        if (usuario.id === id) {
                            // deleta usuario
                            usuarios.splice(i, 1);
                            localStorage.setItem('usuarios', JSON.stringify(usuarios));
                            break;
                        }
                    }

                    // retorna 200 OK
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                } else {
                    // retorna 401 'not authorise' se o 'token' é 'null' ou inválido
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }

                return;
            }

            // passar por quaisquer pedidos não tratados acima
            let realHttp = new Http(realBackend, options);
            let requestOptions = new RequestOptions(
                {
                    method: connection.request.method,
                    headers: connection.request.headers,
                    body: connection.request.getBody(),
                    url: connection.request.url,
                    withCredentials: connection.request.withCredentials,
                    responseType: connection.request.responseType
                }
            );
            realHttp.request(connection.request.url, requestOptions).subscribe(
                (response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });
        }, 500);
    });
    
    return new Http(backend, options);
};

export let fakeUserBackendProvider = {
    // use o backend falso no lugar do serviço Http para desenvolvimento sem backend
    provide: Http,
    useFactory: fakeUserBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
}