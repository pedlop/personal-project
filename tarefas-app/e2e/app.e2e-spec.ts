import { TarefasAppPage } from './app.po';

describe('tarefas-app App', () => {
  let page: TarefasAppPage;

  beforeEach(() => {
    page = new TarefasAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
