export const getItem = (name) => (typeof window === 'object' && JSON.parse(localStorage.getItem(name))) || [];
export const appendItem = (name, object) => localStorage.setItem(name, JSON.stringify([...getItem(name), JSON.stringify(object)]));

export const isExist = (name, id) => {
  const lastItems = getItem(name);
  const exist = lastItems.filter((eachObject) => JSON.parse(eachObject).id == id);
  return exist.length == 0 ? false : true;
};
export const setItem = (name, object) => {
  localStorage.setItem(name, JSON.stringify(object));
};

export const removeItem = (name, video) => {
  const lastItems = getItem(name);
  const otherItem = lastItems.filter((eachObject) => JSON.parse(eachObject).id !== video.id);
  setItem(name, otherItem);
};
