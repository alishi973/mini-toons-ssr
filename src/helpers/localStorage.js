export const getItem = (name) => (typeof window === 'object' && JSON.parse(localStorage.getItem(name))) || [];
export const setItem = (name, object) => {
  localStorage.setItem(name, JSON.stringify([...getItem(name), JSON.stringify(object)]));
};
