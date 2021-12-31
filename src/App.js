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
import PeopleManagement from "./components/PeopleManagement";
import TrendsAcrossRepresentativeGroups from "./components/TrendsAcrossRepresentativeGroups";

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
  //new insights endpoint
  const url =
    "http://ec2-18-223-122-214.us-east-2.compute.amazonaws.com:8000/apis/v1/account6/insights";

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
        <Route path={`/people-management`} component={PeopleManagement} />
      </Switch>
    </div>
  );
}

export const Main = () => (
  <div className={styles.main}>
    <TopNav style={{ height: "60px", borderBottom: "1px solid #e6e6e6" }} />
    <Goals
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "1.5rem",
        marginTop: "1rem",
      }}
    />
    <RepresentativeGroups />
    <TrendsAcrossRepresentativeGroups />
  </div>
);

export default withRouter(hot(module)(App));
