import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import axios from "axios";
import CardInfo from "./CardInfo";
import Navbar from "./Navbar";
import MainForm from "./MainForm";

const MainApp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const reducer = useSelector(state => ({
    ...state.recipeReducer
  }));

  const { loading, data, error, recipe, ID } = reducer;

  useEffect(() => {
    async function getApiData() {
      dispatch({ type: "FETCHING_DATA" });
      try {
        const gettingData = await axios.get(
          `https://api.edamam.com/search?q=${recipe}&app_id=${ID}&app_key=${process.env.REACT_APP_API}`
        );
        dispatch({ type: "RESPONSE_DATA", payload: gettingData.data.hits });
        if (recipe) {
          history.push("/recipe");
        }
      } catch (err) {
        console.log(err.response);
        dispatch({ type: "ERROR", payload: err.response });
      }
    }
    getApiData();
  }, [recipe]);

  const getInput = value => {
    dispatch({ type: "GET_INPUT_VALUE", payload: value });
  };

  return (
    <div>
      <Navbar />
      {!loading ? (
        <div>
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
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
    </div>
  );
};

export default MainApp;
