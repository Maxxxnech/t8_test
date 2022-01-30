//***Маппинг для полученного массива данных***

// В новом массиве осталяем только нужные для наших целей пары "ключ-значение"
export const mapDataListPostsCbk = ({ id, title, body }) => ({ id, title, body });

// Маппер
export const mapDataListPostsPromise = (collection, cbk = mapDataListPostsCbk) => (
  collection.map(cbk)
);
