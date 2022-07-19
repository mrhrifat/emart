import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

const Root = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Root;
