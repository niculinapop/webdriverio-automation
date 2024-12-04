describe('Add element', () => {
  
  it('should display a new element on the page', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const addRemoveElementsLink = await $('//*[@id="content"]/ul/li[2]/a');
    await addRemoveElementsLink.click();

    const addElementButton = await $('//*[@id="content"]/div/button');
    await addElementButton.click();

    const deleteElementButton = await $('//*[@id="elements"]/button');
    expect(await deleteElementButton.isDisplayed()).toBe(true);
  });
});