export const generateMultiple = (
  quantity = 1,
  callback = (id: number) => ({ id })
) => (
  Array(quantity)
    .fill(1)
    .map((_e, index) => callback(index + 1))
)