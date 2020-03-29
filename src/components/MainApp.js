import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import CardInfo from "./CardInfo";
import Navbar from "./Navbar";
import MainForm from "./MainForm";

const MainApp = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [api] = useState({
    ID: "6967c87a",
    KEY: "d4dcd55826cec22b6a58e17472fcd230"
  });

  useEffect(() => {
    async function getApiData() {
      try {
        const gettingData = await axios.get(
          `https://api.edamam.com/search?q=${search.recipe}&app_id=${api.ID}&app_key=${api.KEY}`
        );

        setData(gettingData.data.hits);
        setLoaded(true);
        if (search.recipe) {
          history.push("/recipe");
        }
      } catch (err) {
        console.log(err);
      }
    }
    getApiData();
  }, [search, setData]);

  const getInput = value => {
    setSearch(value);
  };

  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <MainForm getInput={getInput} />
      </Route>
      <div className="MainApp">
        <Route exact path="/recipe">
          {data.map(item => (
            <Card key={item.recipe.calories} item={item} />
          ))}
        </Route>
        <Route path="/recipe/:id">
          <CardInfo data={data} />
        </Route>
      </div>
    </div>
  );
};

export default MainApp;
