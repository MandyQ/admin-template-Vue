import Cookies from 'js-cookie';

const TokenKey = 'admin';

export function getToken() {
  console.log(TokenKey)
  return Cookies.get(TokenKey)  //读取cookie
}

export function setToken(newToken) {
  return Cookies.set(TokenKey, newToken)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
