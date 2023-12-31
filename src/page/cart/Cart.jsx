import React, { useEffect } from "react";
import "../style/Cart.css";
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { decermant, deleteAll, deleteItem, getAllProducts, incermant } from "../../system/ProdutsSlice";
import Scroll from "../../componant/Scroll";
const Cart = () => {
  const dispatsh = useDispatch();
  const { cart } = useSelector((e) => e.products);
  useEffect(() => {
    dispatsh(getAllProducts);
  }, []);
  
  let lastPrice = cart.map((product) => {
    return (product.price - product.price * 0.2)*product.count;
  });
  
  return (
    <div className=" screen">
      <Scroll/>
      {cart.length ? (
        <div className=" container mt-3 mb-3">
          <div className=" bg-white mt-2 mb-2 pt-2 row d-flex align-items-center">
            <p className="text-center divCartNone col-2">S.N</p>
            <p className="text-center col-lg-2 col-md-2 col-sm-2 col-3">Product</p>
            <p className="text-center divCartNone col-2">Last Price</p>
            <p className="text-center col-lg-2 col-md-2 col-sm-2 col-3">Quantity</p>
            <p className="text-center col-lg-2 col-md-2 col-sm-2 col-3">Total Price</p>
            <p className="text-center col-2">Actions</p>
          </div>

          {cart.map((product, index) => (
            <div className=" bg-white mt-3 mb-3 pt-3 row d-flex align-items-center" key={index}>
              <p className="text-center divCartNone col-2">{product.id}</p>
              <p className="text-center col-lg-2 col-md-2 col-sm-2 col-3">{product.brand}</p>
              <p className="text-center text-black-50 divCartNone col-2">{(product.price )}</p>
              <p className="text-center quantity col-lg-2 col-md-2 col-sm-2 d-flex justify-content-center col-3">
                <button onClick={()=>dispatsh(decermant(product))} disabled={product.count<=1} >-</button>
                <span>{product.count}</span>
                <button onClick={()=>dispatsh(incermant(product))}>+</button> 
              </p>
              
              <p className="text-center text-success fw-bold col-lg-2 col-md-2 col-sm-2 col-3">
                {((product.price - product.price * 0.2)*product.count).toFixed(2)}
              </p>
              <p onClick={()=>dispatsh(deleteItem(product))} className="text-center deleteButton col-2">Delete</p>
            </div>
          ))}

          <div className=" row mb-3 ">
            <div className=" d-flex justify-content-between p-3 bg-white ">
              <div className=" d-flex flex-column justify-content-start">
                <Button onClick={()=>dispatsh(deleteAll())} className="btnCart" variant="outline-success">
                  {" "}
                  <BsTrashFill /> Clear Cart
                </Button>
              </div>
              <div className=" d-flex flex-column">
                <p className=" d-flex flex-wrap-reverse justify-content-center">
                  Total({cart.length})items:{" "}
                  <span className=" text-success fw-bold fs-5">
                    EGP {(lastPrice.reduce((y,x)=>y+x,0)).toFixed(2)}
                  </span>{" "}
                </p>
                <button className="bg-success border-0 text-white p-2 m-1 pe-4 ps-4">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cartNone">
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
