import fetch from './index';

export function login (name, pw, type) {
  const data = {
    account: name,
    password: pw,
    type: type, // 3-教师,4-学生
  };
  return fetch({
    url: '/auth/jwt/token',
    method: 'post',
    data
  });
}
