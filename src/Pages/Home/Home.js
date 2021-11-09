import React from "react";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import ClientReview from "./ClientReview/ClientReview";
import Products from "./Products/Products";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Products></Products>
      <Blog></Blog>
      <ClientReview></ClientReview>
    </>
  );
};

export default Home;
