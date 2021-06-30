import {Component} from "react";
import Loader from "../Loader";
import Swapi from '../Api/Swapi'

 function ItemList (props) {
     console.log(props)
    const {itemList, renderItem, onItemSelected} = props
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



const {getAllPeople} = Swapi

export default withData(ItemList, getAllPeople)