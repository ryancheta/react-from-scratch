import React, { forwardRef } from "react";
import { classes } from "../../../utils";
import NavItem from "./NavItem";
import styles from "./styles.mod.scss";
import { Switch, Route } from "react-router-dom";
import { Main } from "../../App";
import CultureAssessment from "../CultureAssessment";

const routes = [
  { path: "/", exact: true, main: <Main /> },
  { path: "/culture-assessment", exact: true, main: <CultureAssessment /> },
];

const SideNav = forwardRef(({ navItems, className, ...rest }, ref) => {
  return (
    <nav ref={ref} className={classes(className, styles.nav)} {...rest}>
      <ul>
        {navItems &&
          navItems.map((item) => (
            <NavItem key={item.id} itemName={item.name} itemIcon={item.icon} />
          ))}
      </ul>
      {/* <Switch>
        <Route path={`/`} component={Main} />
        <Route path={`/culture-assessment`} component={CultureAssessment} />
      </Switch> */}
    </nav>
  );
});

export default SideNav;

// {routes.map((route, idx) => (
//   <Route key={idx} path={route.path} component={<route.main />} />
// ))}
