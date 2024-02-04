import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeITem } from "../utils.js/cartSlice";
import ItemCards from "./ItemCards";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = useCallback(() => {
    console.log("om calld");
    dispatch(clearCart());
  }, []);
  return (
    <div className="text-center m-4 p-4 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          onClick={handleClearCart}
          className="p-2 rounded-lg bg-black text-white my-2"
        >
          Clear cart
        </button>
        {cart.map((item) => {
          return <ItemCards key={item?.id} data={item} showCTA={false} />;
        })}
      </div>
      {cart.length == 0 && <span>Add items to cart</span>}
    </div>
  );
};

export default Cart;
