const RE = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (emails) => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => RE.test(email) === false);

  if (invalidEmails.length) {
    return `This emails are invalid ${invalidEmails}`;
  }

  return;
};