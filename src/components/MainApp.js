import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import CardInfo from "./CardInfo";
import HomePage from "./HomePage";

const MainApp = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [api, setApi] = useState({
    ID: "6967c87a",
    KEY: "d4dcd55826cec22b6a58e17472fcd230"
  });

  //   useEffect(() => {
  //     async function getApiData() {
  //       const getData = await axios.get(
  //         `https://api.edamam.com/search?q=${search}&app_id=${api.ID}&app_key=${api.KEY}`
  //       );
  //       setData(getData.data.hits);
  //       console.log(getData.data.hits);
  //     }
  //     getApiData();
  //   }, [search]);

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("data"));
    if (newData) {
      setData(newData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  console.log(data);
  return (
    <div className="MainApp">
      <Route exact path="/">
        {data.map(item => (
          <Card key={item.recipe.calories} item={item} />
        ))}
      </Route>
      <Route path="/:id">
        <CardInfo data={data} />
      </Route>
    </div>
  );
};

export default MainApp;
