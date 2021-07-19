import React from "react";
import PropTypes from "prop-types";

 function ItemList (props) {
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

ItemList.defaultProps = {
     onItemSelected: () => {}
}

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
}

export default ItemList