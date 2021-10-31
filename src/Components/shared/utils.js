
export const isLoggedIn = () => {
  let user = localStorage.getItem("user");
  user = user && JSON.parse(user);
  return !!(user && user.uid);
};

export const isAdmin = () => {
  let user = localStorage.getItem("user");
  user = user && JSON.parse(user);
  return !!(user && user.role && user.role === "admin");
};
