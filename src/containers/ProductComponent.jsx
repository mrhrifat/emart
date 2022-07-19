import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((e) => {
        console.log(e);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">$ {title}</div>
                <div className="meta price">{price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
