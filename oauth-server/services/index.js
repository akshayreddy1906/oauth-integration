function setSecureCookie(res, token) {
  res.cookie("access_token", token, {
    httpOnly: true,
    maxAge: 1000 * 60 ,
  });
  return res;
}
module.exports = { setSecureCookie };
