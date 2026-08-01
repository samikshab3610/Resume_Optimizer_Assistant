export const saveUser = (user) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const getUser = () => {
  const user = localStorage.getItem("user");

  if (!user) {
    return null;
  }

  return JSON.parse(user);
};

export const clearUser = () => {
  localStorage.removeItem("user");
};