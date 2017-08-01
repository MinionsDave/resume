import { ResumePage } from './app.po';

describe('resume App', () => {
  let page: ResumePage;

  beforeEach(() => {
    page = new ResumePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
