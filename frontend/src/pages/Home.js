import React from "react";
import Hero from "../components/Hero";
import CarouselComp from "../components/CarouselComp";
import "../styles/NavBar.css";
import ScrollToTop from "../components/ScrollToTop";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <ScrollToTop/>
        <Hero></Hero>
        <CarouselComp></CarouselComp>
      </>
    );
  }
}
