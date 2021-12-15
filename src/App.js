import { hot } from "react-hot-loader";
import React, { useRef, useEffect, useState, useMemo } from "react";
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
import { setInsights } from "./store/state/insights/actions";
import { useDispatch } from "react-redux";
import useFetch from "./components/hooks/useFetch";
import { getInsights } from "./api";

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
  const [renderCount, setRenderCount] = useState(1);

  //original insights endpoint
  const insightsUrl =
    "http://ec2-18-223-122-214.us-east-2.compute.amazonaws.com:8000/apis/v1/account_1/insights";

  /** OTHER PUBLIC TEST ENDPOINTS */
  // const openWeatherUrl =
  //   "https://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=dcadf332823cddfb979926a1414274e8";

  // const starWarsUrl = "https://swapi.dev/api/people/1";
  /** OTHER PUBLIC TEST ENDPOINTS */

  //new insights endpoint
  const url =
    "http://ec2-18-223-122-214.us-east-2.compute.amazonaws.com:8000/apis/v1/account_1/insights";
  const data = useFetch(url, null);
  const theRef = useRef(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setRenderCount((prev) => prev++);
    dispatch(setInsights(navItems));
  }, []);

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
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1.5rem",
        marginTop: "1rem",
        placeItems: "center",
      }}
    />
    <RepresentativeGroups />
    <TrendsAcrossRepresentativeGroups />
  </div>
);

export default withRouter(hot(module)(App));
