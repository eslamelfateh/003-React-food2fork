import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return (
      <Header title="amazing recipes" styleClass="header-hero">
        <Link
          to="/recipes"
          className="text-uppercase btn btn-secondary btn-lg mt-3"
        >
          Search recipes
        </Link>
      </Header>
    );
  }
}
