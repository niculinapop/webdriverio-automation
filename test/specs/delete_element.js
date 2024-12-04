describe('Delete element', () => {
  
  it('should successfully remove an element from the page', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const addRemoveElementsLink = await $('//*[@id="content"]/ul/li[2]/a');
    await addRemoveElementsLink.click();

    const addElementButton = await $('//*[@id="content"]/div/button');
    await addElementButton.click();

    const deleteElementButton = await $('//*[@id="elements"]/button');
    await deleteElementButton.click();

    expect(await deleteElementButton.isDisplayed()).toBe(false);
  });
});