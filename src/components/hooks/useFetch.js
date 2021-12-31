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
    (async () => {
      setLoading(true);
      try {
        let response = await axios.get(url);
        setResponse(response);
        setLoading(false);
      } catch (err) {
        console.error(`Error trying to fetch: ${err}`);
        setError(err);
        setLoading(false);
      }
    })();
  }, [url]);

  return { response, error, loading };
};

export default useFetch;
