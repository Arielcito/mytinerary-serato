import React from "react";
import CitiesComp from "../components/CitiesComp";
import ScrollToTop from "../components/ScrollToTop";

export default class Cities extends React.Component {
  render() {
    return (
      <>
        <ScrollToTop/>
        <CitiesComp />
      </>
    );
  }
}
