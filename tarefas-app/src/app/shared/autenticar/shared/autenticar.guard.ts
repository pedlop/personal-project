import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AutenticarGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (localStorage.getItem('usuarioAtual')) {
            return true;
        }

        this.router.navigate(['/login'], { queryParams: {returnUrl: state.url }});
        return false;
    }

}