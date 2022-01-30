import React from "react";
import "./css/ListElement.css"

// Элемент списка
export default function ListElement({title, body}){
    return (
        <li>
            <h3>{title}</h3>
            <section>{body}</section>
        </li>
    )
}