export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

export const processAPIData = (data) => {
  const res = {};
  Object.keys(data).forEach((key) => {
    res[data[key].id] = data[key];
  });
  return res;
};
