import { ExploreBizPage } from './app.po';

describe('explore-biz App', function() {
  let page: ExploreBizPage;

  beforeEach(() => {
    page = new ExploreBizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
