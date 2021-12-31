import React, { forwardRef, useEffect } from "react";
import { classes } from "utils";
import NavItem from "./NavItem";
import styles from "./styles.mod.scss";
import { Main } from "App";
import CultureAssessment from "../CultureAssessment";
import { setInsights } from "../../store/state/insights/actions";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";

const routes = [
  { path: "/", exact: true, main: <Main /> },
  { path: "/culture-assessment", exact: true, main: <CultureAssessment /> },
];

const SideNav = forwardRef(({ navItems, className, ...rest }, ref) => {
  const dispatch = useDispatch();
  const url =
    "http://ec2-18-223-122-214.us-east-2.compute.amazonaws.com:8000/apis/v1/account6/insights";
  const { response, error, loading } = useFetch(url, null);

  useEffect(() => {
    dispatch(setInsights(response?.data));
  }, [response]);
  return (
    <nav ref={ref} className={classes(className, styles.nav)} {...rest}>
      <ul>
        {navItems &&
          navItems.map((item) => (
            <NavItem key={item.id} itemName={item.name} itemIcon={item.icon} />
          ))}
      </ul>
    </nav>
  );
});

export default SideNav;
