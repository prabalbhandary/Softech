import React from "react";
import Hero from "../../components/Hero/Hero";
import ImageContainer from "../../components/ImageSection/ImageSection";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";
import Security from "../../components/Security/Security";
import Testimonials from "../../components/Testimonials/Testimonials";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <>
    <Hero />
    <ImageContainer />
    <List />
    <Card />
    <Security />
    <Testimonials />
    <Banner />
    </>
  );
};

export default Home;
