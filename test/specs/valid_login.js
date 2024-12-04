//const { WEB } = require('../../locators/locatorPath');

describe('Valid login authentication', () => {
  
  it('should loggin successfully', async () => {
    await browser.url('https://the-internet.herokuapp.com/');

    const formAuthenticationLink = await $('//*[@id="content"]/ul/li[21]/a');
    await formAuthenticationLink.click();

    const usernameInput = await $('#username');
    const passwordInput = await $('#password');
    await usernameInput.setValue('tomsmith');
    await passwordInput.setValue('SuperSecretPassword!');

    const loginButton = await $('//*[@id="login"]/button');
    await loginButton.click();

    const logoutButton = await $('//*[@id="content"]/div/a');
    expect(await logoutButton.isDisplayed()).toBe(true);
    
  });
});

