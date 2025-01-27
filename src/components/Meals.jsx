import { useState, useEffect } from "react";
import axios from "axios";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        // console.log(res.data.meals);
        setItems(res.data.meals);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => (
    <section className="card" key={idMeal}>
      <img src={strMealThumb} alt={strMeal} />
      <section className="content">
        <p>{strMeal}</p>
        <p>ID: {idMeal}</p>
      </section>
    </section>
  ));

  return <div className="items-container">{itemsList}</div>;
};

export default Meals;
