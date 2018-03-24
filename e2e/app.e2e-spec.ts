import { Practica1AngularAgustinMuniosCamposPage } from './app.po';

describe('practica1-angular-agustin-munios-campos App', () => {
  let page: Practica1AngularAgustinMuniosCamposPage;

  beforeEach(() => {
    page = new Practica1AngularAgustinMuniosCamposPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
