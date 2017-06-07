import { YahtzeePage } from './app.po';

describe('yahtzee App', () => {
  let page: YahtzeePage;

  beforeEach(() => {
    page = new YahtzeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
