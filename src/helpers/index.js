export const isRequired = (value) =>
  value.length ? undefined : "The field is required";

const minLength = (length) => (value) => {
  return value.length >= length
    ? undefined
    : `The min lenght must be ${length}`;
};

const maxLength = (length) => (value) => {
  return value.length <= length
    ? undefined
    : `The max lenght must be ${length}`;
};

export const validateEmail = (value) => {
  const rgx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return rgx.test(String(value).toLowerCase())
    ? undefined
    : "Please Write Email";
};

export const validatePhone = (value) => {
  const rgx = /^[1-9]\d*(\.\d+)?$/;
  return rgx.test(String(value).toLowerCase())
    ? undefined
    : "Please Write Phone";
};

export const getRandom = () => {
  return Math.floor(Math.random() * 4000);
};

export const minLength3 = minLength(3);
export const minLength9 = minLength(9);

export const maxLength400 = maxLength(400);
export const maxLength30 = maxLength(30);
