import { useEffect, useState } from "react";

const useFetchdishes = () => {
  const [dishes, setDishe] = useState([]);
  const [error, setError] = useState(null);

  const fetchdishes = async () => {
    try {
      const response = await fetch("../../../public/Dishes/Dishes.json");
      const data = await response.json();
      setDishe(data.dishes);
    } catch (error) {
      setError(error.message);
    }
   
  };
  let Italienske = dishes.filter((p) => p.tag.includes("italienske"));

  useEffect(() => {
    fetchdishes();
  }, []);

  return {
    dishes,
    Italienske,
  };
};

export { useFetchdishes };
