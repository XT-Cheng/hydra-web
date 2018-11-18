import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to hydra-web!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to app!');
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
  });
});
