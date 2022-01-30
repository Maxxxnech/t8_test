import React from "react";
import ListElement from "./ListElement";

// Темплэйт для рендера списка 
// Упрощает код родительского компонента спика DataList,
// оставляя в нем состояния и абстрагируя разметку

export default function DataListTemplate({list}) {
  return (
    <div>
      <ul>
        {list.map((el) => (
          <ListElement key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
}
