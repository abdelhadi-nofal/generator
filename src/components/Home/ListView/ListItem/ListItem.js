import React from "react";
import "./styles.css";

function ListItem({ item: { coverSrc, title, price } }) {
  return (
    <div className="listItem-wrap">
      <img src={coverSrc} alt="" />
      <header>
        <h4>{title}</h4>
      </header>
      <footer>
        <b>${price}</b>
      </footer>
    </div>
  );
}

export default ListItem;
