import React from "react";
import CitiesComp from "../components/CitiesComp";
import ScrollToTop from "../components/ScrollToTop";

export default class Cities extends React.Component {
  componentDidMount() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
  render() {
    return (
      <>
        <ScrollToTop />
        <CitiesComp />
      </>
    );
  }
}
