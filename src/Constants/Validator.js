const validEmail = email => {
  const checker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return checker.test(email);
};
const validNumber = number => {
  const checker = /^\d*$/;
  return checker.test(number);
};
export {
  validEmail,
  validNumber
};
