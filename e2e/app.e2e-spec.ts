import { EcomProPage } from './app.po';

describe('ecom-pro App', () => {
  let page: EcomProPage;

  beforeEach(() => {
    page = new EcomProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
