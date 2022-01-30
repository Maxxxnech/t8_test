import React, { PureComponent } from "react";

// **Api для получения сообщений с сервера. Возвращает промис**
import getApiPostsPromise from "./api/getApiPosts";

// **Логика (сокращение коллекции**
import { filterOnePageCollection } from "./logic/logic"

// **Mapping полученных значений**
import { mapDataListPostsPromise } from "./mapping/mapping"

// **Темплэйт для рендера списка (для абстрагирования разметки)**
import DataListTemplate from "./DataList.template";


export default class DataList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
 /**
  * После монтирования компонента:
  * 1) Получить данные с сервера
  * 2) Обработать (сократить) список
  * 3) Мэппинг полученного списка
  * 4) Установка состояния
  */
  componentDidMount() {
    getApiPostsPromise
    .then(collection => filterOnePageCollection(collection, -96))
    .then(collection => mapDataListPostsPromise(collection))
    .then((list) => {
      console.log(list);
      this.setState({ list});
    }); 
  }
  render() {
    const { list } = this.state;
    return (
       <DataListTemplate list={list} />
    );
  }
}
