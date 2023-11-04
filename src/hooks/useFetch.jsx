import { useEffect, useState } from "react";

const changeState = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, date: action.payload };
    case "SET_ISPENDING":
  }
};

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Something :)");
        }

        const data = await req.json();

        setData(data);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
        console.log(error.message);
      }
    };
    getData();
  }, [url]);

  return { data, error, isPending };
}
