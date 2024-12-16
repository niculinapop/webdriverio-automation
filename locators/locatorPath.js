export const web = {
  LINKS: {
    FORM_AUTH_LINK: '//*[@id="content"]/ul/li[21]/a',
    ADD_REMOVE_ELEMENT_LINK: '//*[@id="content"]/ul/li[2]/a',
    DRAG_AND_DROP_LINK: '//*[@id="content"]/ul/li[10]/a',
    REDIRECT_LINK: '//*[@id="content"]/ul/li[36]/a',
    NOTIFICATION_MESSAGES_LINK: '//*[@id="content"]/ul/li[35]/a',
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
  },
  DRAG_AND_DROP: {
    ELEMENT: '#column-a',
    TARGET: '#column-b',
  },
  REDIRECT: {
    STATUS_CODE_PAGE: '#redirect',
    STATUS_200: '//*[@id="content"]/div/ul/li[1]/a',
    RESULT_TEXT: '//*[@id="content"]/div/p',
  },
  NOTIFICATION: {
    NOTIFICATION_BUTTON: '//*[@id="content"]/div/p/a',
    MESSAGE_CONTAINER: '#flash',
  }
};

