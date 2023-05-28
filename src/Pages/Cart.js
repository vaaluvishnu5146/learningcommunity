import React from "react";
import CartCard from "../Components/Cards/CartCard";
import { useCart } from "../Context/CartContext";

export default function Cart(props) {
  const { cart = [] } = useCart();
  return (
    <>
      <section className="content-area-height py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
              {cart &&
                cart.map((d, i) => (
                  <CartCard key={`cart-items-${i}`} data={d} />
                ))}
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
          </div>
        </div>
      </section>
    </>
  );
}
