import React from "react";
import Hero from "../components/Hero";
import CarouselComp from "../components/CarouselComp";
import "../styles/NavBar.css";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Hero></Hero>
        <CarouselComp></CarouselComp>
      </>
    );
  }
}
