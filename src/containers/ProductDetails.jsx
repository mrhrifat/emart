import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productAction";

const ProductDetails = () => {
  const { productId } = useParams();
  // console.log(productId);

  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((e) => {
        console.log(e);
      });
    // console.log(response.data);

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && product !== "") {
      fetchProductDetails();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  // console.log(product);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="">Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
