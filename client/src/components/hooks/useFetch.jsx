import { useEffect, useState } from "react";
import makeRequest from "../../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const featchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url, {
          headers: {
            Authorization: "junaiyet" + import.meta.env.VITE_API_TOKEN,
          },
        });
        setData(res.data.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    featchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
