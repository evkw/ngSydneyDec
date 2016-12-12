import { NgSydneyDecPage } from './app.po';

describe('ng-sydney-dec App', function() {
  let page: NgSydneyDecPage;

  beforeEach(() => {
    page = new NgSydneyDecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
