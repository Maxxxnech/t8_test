// Возвращает сокращенный массив
export const filterOnePageCollection = (arr, countRow, from = 0) => (
    arr.slice(from, arr.length - from + countRow)
)

