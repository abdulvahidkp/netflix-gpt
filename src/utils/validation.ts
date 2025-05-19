const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validatePassword(pw: string) {
  return (
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /[0-9]/.test(pw) &&
    /[^A-Za-z0-9]/.test(pw) &&
    pw.length > 4
  );
}

export function authValidation(
  email?: string,
  password?: string,
  name?: string,
  checkName?: boolean
) {
  if (!email || !validateEmail(email)) return "email not valid";
  if (!password || !validatePassword(password)) return "password not valid";
  if (checkName && (!name || name!.trim().length === 0))
    return "name not valid";
  return "";
}
