export const generateMultiple = (
  quantity = 1,
  callback: (id: number) => any = (id) => ({ id })
) => (
  Array(quantity)
    .fill(1)
    .map((_e, index) => callback(index + 1))
)