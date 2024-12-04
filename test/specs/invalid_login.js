describe('Invalid login authentication', () => {
  
  it('should display an error message', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const formAuthenticationLink = await $('//*[@id="content"]/ul/li[21]/a');
    await formAuthenticationLink.click();

    const usernameInput = await $('#username');
    const passwordInput = await $('#password');
    await usernameInput.setValue('ErrorUser');
    await passwordInput.setValue('ErrorPassword');

    const loginButton = await $('//*[@id="login"]/button');
    await loginButton.click();

    const errorMessage = await $('#flash');
    expect(await errorMessage.isDisplayed()).toBe(true);
    expect(await errorMessage.getText()).toContain('Your username is invalid!'); 
    
  });
});
