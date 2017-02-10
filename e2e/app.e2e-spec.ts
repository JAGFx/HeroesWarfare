import { HeroesWarfarePage } from './app.po';

describe('heroes-warfare App', function() {
  let page: HeroesWarfarePage;

  beforeEach(() => {
    page = new HeroesWarfarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
