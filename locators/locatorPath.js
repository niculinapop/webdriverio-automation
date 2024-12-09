const WEB = {
  LINKS: {
    FORM_AUTH_LINK: '//*[@id="content"]/ul/li[21]/a',
    ADD_REMOVE_ELEMENT_LINK: '//*[@id="content"]/ul/li[2]/a',
  },
  LOGIN: {
    USERNAME_INPUT: '#username',
    PASSWORD_INPUT: '#password',
    LOGIN_BUTTON: '//*[@id="login"]/button',
    LOGOUT_BUTTON: '//*[@id="content"]/div/a',
    ERROR_LOGIN_MESSAGE: '#flash',
  },
  ADD_REMOVE: {
    ADD_ELEMENT_BUTTON: '//*[@id="content"]/div/button',
    DELETE_ELEMENT_BUTTON: '//*[@id="elements"]/button', 
  }
};

module.exports = {WEB};