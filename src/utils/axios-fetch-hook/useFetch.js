import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../api/Api.js";

// The default URL from backend
axios.defaults.baseURL = api;

const useFetch = ({ url, method }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios[method](url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url]);

  return { response, error, loading };
};

export default useFetch;
