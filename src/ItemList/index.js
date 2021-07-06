import React from "react";

export default function ItemList (props) {
    const {itemList, children: renderItem, onItemSelected} = props
    const items = itemList.map((item) => {
        const id = item.id

        const label = renderItem(item)

        return (
            <li
                className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}
            >
                {label}
            </li>
        )
    })

    return (
        <ul className="item-list list-group mx-2">
            {items}
        </ul>
    )
}