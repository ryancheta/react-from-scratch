import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  options = options || {
    headers: {
      "X-Frame-Options": "sameorigin",
      "Access-Control-Allow-Origin": "*",
    },
    method: "GET",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return { response, error, loading };
};

export default useFetch;
