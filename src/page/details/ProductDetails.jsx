import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deceramentCount, getProductDetails, inceramentCount } from "../../system/ProductDetailsSlice";
import "../style/ProductDetails.css";
import { FaShoppingCart } from "react-icons/fa";
import { InfinitySpin } from  'react-loader-spinner'
import { pluse } from "../../system/ProdutsSlice";
import Swal from "sweetalert2";
const ProductDetails = () => {
  const [data,setData]=useState({})
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product,loading } = useSelector((e) => e.product);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);


  

  const incermant=()=>{
    console.log(data);
    
  }
 const addProduct =()=>{
  Swal.fire({
    icon: 'success',
    title: 'Product has been added',
    showConfirmButton: false,
    timer: 1500
  })
  dispatch(pluse(product))
 }
  return (
    <div className=" headProdutDeatails ">
     {loading ? (
              <div className=" d-flex justify-content-center"><InfinitySpin width="200" color="#4fa94d" /></div>
            ) :      <div className=" fristDiv ">
            {product.images && (
              // <div className=" titleImg" style={{background:`url(${product.images[0]})`}}></div>
              <div>
                <img src={product.images[0]} className="titleImg m-3" alt="" />
                <div>
                  <img
                    src={product.images[1]}
                    className=" secondImg m-1 ms-4"
                    alt=""
                  />
                  <img src={product.images[2]} className=" secondImg m-1 " alt="" />{" "}
                  <img src={product.images[3]} className=" secondImg m-1 " alt="" />{" "}
                  <img src={product.images[4]} className=" secondImg m-1 " alt="" />
                </div>
              </div>
            )}
    
            <div className=" detailsDiv ms-3 mt-3">
              <h5>{product.title}</h5>
              <hr />
              <p>{product.description}</p>
    
    <div className=" d-flex ">
    <p className=" pe-2 ps-2 text-center detailsProduct">
                {" "}
                <span className=" text-success ">Rating:</span>{" "}
                <span>{product.rating}</span>
              </p>
              <p className=" pe-2 ps-2 text-center detailsProduct">
                {" "}
                <span className=" text-success ">Brand:</span>{" "}
                <span>{product.brand}</span>
              </p>
              <p className="pe-2 ps-2  ms-2 text-center ">
                {" "}
                <span className=" text-success ">Category:</span>{" "}
                <span>{product.category}</span> 
              </p>
    </div>
    <div className=" p-2 bg-opacity-10 bg-black">
    <p className="lastPrice"><span> EGP {product.price}</span> inclusive of all taxes</p>
    <h5 className=" text-success priceUpdate"> EGP {product.price-(product.price*.2)}  <span>17.91%off</span></h5>

    
    </div>
    
     <p className='quantity d-flex justify-content-lg-start mt-2'> Quantity: <button onClick={()=>dispatch(deceramentCount())} disabled={product.count<=1} className=" ms-2">-</button>
     <span>{product.count}</span><button onClick={()=>dispatch(inceramentCount())} >+</button></p> 
    
    <div className=" mt-3">
      <button onClick={addProduct} className=" bg-success border-0 text-white p-2 m-2 pe-4 ps-4"> <FaShoppingCart/>  Add To Cart</button>
      <button className=" bg-success border-0 text-white p-2 m-2 pe-4 ps-4">Buy Now</button>
    </div>
            </div>
          </div>} 

    </div>
  );
};

export default ProductDetails;
