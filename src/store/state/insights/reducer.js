import { handleActions } from "redux-actions";

import { setInsights } from "./actions";

const defaultState = {
  insights: {},
};

const insights = handleActions(
  {
    [setInsights]: (state, { payload }) => ({
      ...state,
      insights: payload,
    }),
  },
  defaultState
);

export default insights;
