import React, { useEffect } from "react";
import styles from "./styles.mod.scss";
import { Link, useParams, useRouteMatch } from "react-router-dom";

const getSlugFromUrlParam = (name) => name.split(" ").join("-");

const NavItem = ({ itemName, itemIcon }) => {
  let { pathname } = window.location;
  let slug = getSlugFromUrlParam(itemName);

  useEffect(() => {
    let svg = document.querySelector("svg");
    svg.style.stroke = "red";
  }, []);

  // console.log(
  //   "pathname: %s\nslug: %s\nlocation: %o\nitemName: %s",
  //   pathname,
  //   slug,
  //   window.location,
  //   itemName
  // );
  let activeStyle = pathname.includes(slug)
    ? {
        background: "#3F8CFF10",
        borderRadius: "50px",
        color: "#0049C6",
      }
    : null;

  return (
    <li className={styles.navItem}>
      <Link
        id={pathname.includes(getSlugFromUrlParam(itemName)) ? "active" : ""}
        to={itemName === "home" ? "/" : getSlugFromUrlParam(itemName)}
        style={{ display: "flex", alignItems: "center", ...activeStyle }}
      >
        {itemIcon}
        <p style={{ marginLeft: "8px" }}>{itemName}</p>
      </Link>
    </li>
  );
};

export default NavItem;
