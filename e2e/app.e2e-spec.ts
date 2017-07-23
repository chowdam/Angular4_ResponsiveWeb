import { PsalWebAdminPage } from './app.po';

describe('psal-web-admin App', () => {
  let page: PsalWebAdminPage;

  beforeEach(() => {
    page = new PsalWebAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
