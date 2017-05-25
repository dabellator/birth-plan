export function Email(value) {
    var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return {
      isValid: re.test(value),
      message: "Please enter a valid email address."
    }
}

export default {
  Email,
}
