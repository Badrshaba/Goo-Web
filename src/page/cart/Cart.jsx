import React, { useEffect } from "react";
import "../style/Cart.css";
import Button from "react-bootstrap/Button";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteAll, deleteItem, getAllProducts } from "../../system/ProdutsSlice";
const Cart = () => {
  const dispatsh = useDispatch();
  const { cart } = useSelector((e) => e.products);
  useEffect(() => {
    dispatsh(getAllProducts);
  }, []);
  console.log(cart);
  let lastPrice = cart.map((product) => {
    return (product.price - product.price * 0.2).toFixed(2);
  });
  console.log(cart);
  return (
    <div>
      {cart.length ? (
        <div className=" container mt-3 mb-3">
          <div className=" bg-white mt-2 mb-2 pt-2 row">
            <p className="text-center col-2">S.N</p>
            <p className="text-center col-2">Product</p>
            <p className="text-center col-2">Unit Price</p>
            <p className="text-center col-2">Quantity</p>
            <p className="text-center col-2">Total Price</p>
            <p className="text-center col-2">Actions</p>
          </div>

          {cart.map((product, index) => (
            <div className=" bg-white mt-3 mb-3 pt-3 row" key={index}>
              <p className="text-center col-2">{product.id}</p>
              <p className="text-center col-2">{product.brand}</p>
              <p className="text-center text-black-50 col-2">{(product.price - product.price * 0.2).toFixed(2)}</p>
              <p className="text-center quantity d-flex justify-content-center col-2">
                <button>-</button>
                <span>{product.count}</span>
                <button>+</button>
              </p>
              {console.log(product)}
              <p className="text-center text-success fw-bold col-2">
                {(product.price - product.price * 0.2).toFixed(2)}
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
                <p>
                  Total({cart.length})items:{" "}
                  <span className=" text-success fw-bold fs-5">
                    EGP {lastPrice.reduce((y,x)=>y+x,0)}
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
