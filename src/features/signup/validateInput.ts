const validateId = (value: string) => value.length === 10;

const validateName = (value: string) => /^[a-zA-Z\s]+$/.test(value);

const validateEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validatePassword = (value: string) =>
  /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);

export { validateId, validateName, validateEmail, validatePassword };
