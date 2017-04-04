import { NgIfPage } from './app.po';

describe('ng-if App', function() {
  let page: NgIfPage;

  beforeEach(() => {
    page = new NgIfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
