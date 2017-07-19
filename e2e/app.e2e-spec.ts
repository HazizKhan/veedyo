import { VeedyoPage } from './app.po';

describe('veedyo App', () => {
  let page: VeedyoPage;

  beforeEach(() => {
    page = new VeedyoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
