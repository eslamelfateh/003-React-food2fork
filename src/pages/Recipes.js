import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
export default class Recipes extends Component {
  render() {
    return (
      <>
        <Search />
        <RecipeList />
      </>
    );
  }
}
