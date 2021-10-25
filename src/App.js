import { hot } from "react-hot-loader";
import React from "react";
import "./App.scss";
import styles from "./app.mod.scss";
import SideNav from "./components/sideNav";
import Goals from "./components/goals";
import TopNav from "./components/TopNav";
import { Route, Switch, withRouter } from "react-router-dom";
import CultureAssessment from "./components/CultureAssessment";
import Forecasting from "./components/Forecasting";
import RepresentativeGroups from "./components/RepresentativeGroups";
import { ReactComponent as InsightsIcon } from "./assets/images/svg/side-nav/insights.svg";
import { ReactComponent as CultureAssessmentIcon } from "./assets/images/svg/side-nav/culture-assessment.svg";
import { ReactComponent as PeopleManagmentIcon } from "./assets/images/svg/side-nav/people-management.svg";
import { ReactComponent as ForecastingIcon } from "./assets/images/svg/side-nav/forecasting.svg";
import { ReactComponent as GoalsIcon } from "./assets/images/svg/side-nav/goals.svg";
import { ReactComponent as PermissionsIcon } from "./assets/images/svg/side-nav/permissions.svg";

const ICON = {
  insights: <InsightsIcon />,
  culture_assessment: <CultureAssessmentIcon />,
  people_management: <PeopleManagmentIcon />,
  forecasting: <ForecastingIcon />,
  goals: <GoalsIcon />,
  permissions: <PermissionsIcon />,
};

const navItems = [
  { id: 1, name: "insights", icon: ICON.insights },
  { id: 2, name: "culture assessment", icon: ICON.culture_assessment },
  { id: 3, name: "people management", icon: ICON.people_management },
  { id: 4, name: "forecasting", icon: ICON.forecasting },
  { id: 5, name: "goals", icon: ICON.goals },
  { id: 6, name: "permissions", icon: ICON.permissions },
];

function App() {
  return (
    <div className={styles.pageContainer} data-testid="app">
      <SideNav className={styles.sideNav} navItems={navItems} />
      <Switch>
        <Route exact path={`/insights`} component={Main} />
        <Route
          exact
          path={`/culture-assessment`}
          component={CultureAssessment}
        />
        <Route path={`/forecasting`} component={Forecasting} />
      </Switch>
    </div>
  );
}

export const Main = () => (
  <div className={styles.main}>
    <TopNav style={{ height: "60px", borderBottom: "1px solid #e6e6e6" }} />
    <Goals style={{ justifyContent: "space-around", marginTop: "1rem" }} />
    <RepresentativeGroups />
  </div>
);

export default withRouter(hot(module)(App));
