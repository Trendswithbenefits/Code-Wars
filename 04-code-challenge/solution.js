function validateUsr(username) {
  console.log(username);
  res = /^[a-z0-9\_]{4,16}$/gm.test(username);
  return res;
}