import Cookies from 'js-cookie';

const TokenKey = 'admin';

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(newToken) {
  return Cookies.set(TokenKey,newToken )
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
