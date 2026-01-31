import { ShopContext } from "@/context/ShopContext";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./product.css";
import { assets } from "@/assets/assets";
import RelatedProducts from "@/components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart,  } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="productDetailContainer">
      {/* Product data */}
      <div className="pdChildContainer">
        {/* Product images */}
        <div className="productImageParent">
          <div className="productImageChild">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                className="productSmallImage"
              />
            ))}
          </div>
          <div className="productMainImageContainer">
            <img src={image} className="productImageFull" alt="" />
          </div>
        </div>

        {/* Product info */}
        <div className="productInfoContainer">
          <h1 className="pdName">{productData.name}</h1>
          <div className="starIconParent">
            <img src={assets.star_icon} className="starIcon" alt="" />
            <img src={assets.star_icon} className="starIcon" alt="" />
            <img src={assets.star_icon} className="starIcon" alt="" />
            <img src={assets.star_icon} className="starIcon" alt="" />
            <img src={assets.star_icon} className="starIcon" alt="" />
            <p className="noOfRating">(122)</p>
          </div>
          <p className="pdPrice">
            {currency}
            {productData.price}
          </p>
          <p className="productDescription">{productData.description}</p>
          <div className="productSizeContainer">
            <p>Select Size</p>
            <div className="sizeListContainer">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`sizeButton ${item === size ? "borderOrange" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className="addToCartButton">ADD TO CART</button>
          <hr className="addToCartLine" />
          <div className="extraDetailsContainer">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* description and review section */}
      <div className="drContainer">
        <div className="drHeadingParent">
          <b className="descriptionButton">Description</b>
          <p className="descriptionButton">Reviews</p>
        </div>
        <div className="descriptionParent">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      {/* Display Similar Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="productSecondParent"></div>
  );
};

export default Product;
