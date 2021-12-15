import axios from "axios";

const getInsights = () => {
  let url =
    "http://ec2-18-223-122-214.us-east-2.compute.amazonaws.com:8000/apis/v1/account_1/insights";
  return axios.get(url);
};

export { getInsights };
