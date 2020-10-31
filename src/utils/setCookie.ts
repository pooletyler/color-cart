const setCookie = (name: string, value: string, daysValid: number) => {
  const d = new Date();
  d.setTime(d.getTime() + daysValid * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;

  document.cookie = `${name}=${value};${expires};path=/`;
};

export default setCookie;
