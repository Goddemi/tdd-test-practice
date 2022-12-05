export const LIFO = (array, method, element) => {
  if (method === "push") {
    array.push(element);
  }
  if (method === "pop") {
    array.pop();
  }
};
