import React from "react";
import Banner from "./Banner/Banner";
import Bikes from "./Bikes/Bikes";
import Blog from "./Blog/Blog";
import ClientReview from "./ClientReview/ClientReview";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Bikes></Bikes>
      <Blog></Blog>
      <ClientReview></ClientReview>
    </>
  );
};

export default Home;
