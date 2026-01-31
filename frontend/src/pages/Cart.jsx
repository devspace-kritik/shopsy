import { ShopContext } from "@/context/ShopContext";
import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import Title from "@/components/Title";
import { assets } from "@/assets/assets";
import CartTotal from "@/components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    console.log(cartItems);
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="cartItemContainer">
      <div className="cartChildContainer">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id,
          );
          return (
            <div key={index} className="cartCard">
              <div className="cartImageCard">
                <img
                  className="cartItemImage"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="cartProductName">{productData.name}</p>
                  <div className="cartPriceParent">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="cartItemSize">{item.size}</p>
                  </div>
                </div>
              </div>
              <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className="cartItemQuantity" type="number" min={1} defaultValue={item.quantity} />
              <img onClick={()=>updateQuantity(item._id, item.size, 0)} className="binIcon" src={assets.bin_icon} alt="" />
            </div>
          );
        })}
      </div>
      <div className="displayTotalParent">
        <div className="displayTotalChild">
          <CartTotal/>
          <div className="paymentButtonContainer">
            <button onClick={()=>navigate('/place-order')} className="paymentButton">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
