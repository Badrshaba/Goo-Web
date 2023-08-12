import React, { useEffect } from "react";
import "../style/Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../system/ProdutsSlice";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from  'react-loader-spinner'
const SecoundHome = () => {
  const move = useNavigate();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((e) => e.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log(product);
  return (
    <div>
      <div className="container ">
        {/*/////////////////////// All products  /////////////////////// */}
        <div>
          <div className="mt-5 headSecoundHome">
            <h3>SEE OUR PRODUCTS</h3>
          </div>
          <div>
            {loading ? (
              <div className=" d-flex justify-content-center"><InfinitySpin width="200" color="#4fa94d" /></div>
            ) : (
              <div className=" d-flex justify-content-around flex-wrap mt-3">
                {product.length &&
                  product.map((item, index) => (
                    <Card
                      key={index}
                      style={{ width: "18rem", height: "20rem" }}
                      className="m-2 cardHome"
                      onClick={() => move(`/product/${item.id}`)}
                    >
                      <div
                        style={{ background: `url(${item.images[0]})` }}
                        className=" position-relative imgHome"
                      >
                        <div className=" bg-success position-absolute categoryDiv">
                          {item.category}{" "}
                          <div className=" bg-success position-absolute"></div>{" "}
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Text className=" brandText">
                          <span> Brand:</span> {item.brand}
                        </Card.Text>
                        <hr className=" m-2" />
                        <Card.Text className=" kindText">
                          {item.title}
                        </Card.Text>
                        <Card.Text className="priceText d-flex justify-content-around">
                          <p>EGP {item.price.toFixed(2)}</p>
                          <p>
                            EGP {(item.price - item.price * 0.2).toFixed(2)}
                          </p>
                          <p>(%off)</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
            )}
            {/*/////////////////////// smart phone category /////////////////////// */}
            <div className="mt-5 headSecoundHome">
              <h3>SMARTPHONES</h3>
            </div>
            {loading ? (
  <div className=" d-flex justify-content-center"><InfinitySpin width="200" color="#4fa94d" /></div>
            ) : (
              <div className=" d-flex justify-content-around flex-wrap mt-3">
                {product.length &&
                  product.filter((e) => e.category == "smartphones")
                    .map((item, index) => (
                      <Card
                        key={index}
                        style={{ width: "18rem", height: "20rem" }}
                        className="m-2 cardHome"
                        onClick={() => move(`/product/${item.id}`)}
                      >
                        <div
                          style={{ background: `url(${item.images[0]})` }}
                          className=" position-relative imgHome"
                        >
                          <div className=" bg-success position-absolute categoryDiv">
                            {item.category}{" "}
                            <div className=" bg-success position-absolute"></div>{" "}
                          </div>
                        </div>
                        <Card.Body>
                          <Card.Text className=" brandText">
                            <span> Brand:</span> {item.brand}
                          </Card.Text>
                          <hr className=" m-2" />
                          <Card.Text className=" kindText">
                            {item.title}
                          </Card.Text>
                          <Card.Text className="priceText d-flex justify-content-around">
                            <p>EGP {item.price.toFixed(2)}</p>
                            <p>
                              EGP {(item.price - item.price * 0.2).toFixed(2)}
                            </p>
                            <p>(%off)</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
              </div>
            )}
            {/*/////////////////////// LAPTOP category /////////////////////// */}
            <div className="mt-5 headSecoundHome">
              <h3> LAPTOP </h3>
            </div>
            {loading ? (
 <div className=" d-flex justify-content-center"><InfinitySpin width="200" color="#4fa94d" /></div>
            ) : (
              <div className=" d-flex justify-content-around flex-wrap mt-3">
                {product.length &&
                  product
                    .filter((e) => e.category == "laptops")
                    .map((item, index) => (
                      <Card
                        key={index}
                        style={{ width: "18rem", height: "20rem" }}
                        className="m-2 cardHome"
                        onClick={() => move(`/product/${item.id}`)}
                      >
                        <div
                          style={{ background: `url(${item.images[0]})` }}
                          className=" position-relative imgHome"
                        >
                          <div className=" bg-success position-absolute categoryDiv">
                            {item.category}{" "}
                            <div className=" bg-success position-absolute"></div>{" "}
                          </div>
                        </div>
                        <Card.Body>
                          <Card.Text className=" brandText">
                            <span> Brand:</span> {item.brand}
                          </Card.Text>
                          <hr className=" m-2" />
                          <Card.Text className=" kindText">
                            {item.title}
                          </Card.Text>
                          <Card.Text className="priceText d-flex justify-content-around">
                            <p>EGP {item.price.toFixed(2)}</p>
                            <p>
                              EGP {(item.price - item.price * 0.2).toFixed(2)}
                            </p>
                            <p>(%off)</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
              </div>
            )}
            {/*/////////////////////// FRAGRANCES category /////////////////////// */}
            <div className="mt-5 headSecoundHome">
              <h3> FRAGRANCES </h3>
            </div>
            {loading ? (
 <div className=" d-flex justify-content-center"><InfinitySpin width="200" color="#4fa94d" /></div>
            ) : (
              <div className=" d-flex justify-content-around flex-wrap mt-3">
                {product.length &&
                  product
                    .filter((e) => e.category == "fragrances")
                    .map((item, index) => (
                      <Card
                        key={index}
                        style={{ width: "18rem", height: "20rem" }}
                        className="m-2 cardHome"
                        onClick={() => move(`/product/${item.id}`)}
                      >
                        <div
                          style={{ background: `url(${item.images[0]})` }}
                          className=" position-relative imgHome"
                        >
                          <div className=" bg-success position-absolute categoryDiv">
                            {item.category}{" "}
                            <div className=" bg-success position-absolute"></div>{" "}
                          </div>
                        </div>
                        <Card.Body>
                          <Card.Text className=" brandText">
                            <span> Brand:</span> {item.brand}
                          </Card.Text>
                          <hr className=" m-2" />
                          <Card.Text className=" kindText">
                            {item.title}
                          </Card.Text>
                          <Card.Text className="priceText d-flex justify-content-around">
                            <p>EGP {item.price.toFixed(2)}</p>
                            <p>
                              EGP {(item.price - item.price * 0.2).toFixed(2)}
                            </p>
                            <p>(%off)</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
              </div>
            )}
            {/*/////////////////////// SKINCARE category /////////////////////// */}
            <div className="mt-5 headSecoundHome">
              <h3> SKINCARE </h3>
            </div>
            {loading ? (
   <div className=" d-flex justify-content-center"><InfinitySpin width="200" color="#4fa94d" /></div>
            ) : (
              <div className=" d-flex justify-content-around flex-wrap mt-3">
                {product.length &&
                  product
                    .filter((e) => e.category == "skincare")
                    .map((item, index) => (
                      <Card
                        key={index}
                        style={{ width: "18rem", height: "20rem" }}
                        className="m-2 cardHome"
                        onClick={() => move(`/product/${item.id}`)}
                      >
                        <div
                          style={{ background: `url(${item.images[0]})` }}
                          className=" position-relative imgHome"
                        >
                          <div className=" bg-success position-absolute categoryDiv">
                            {item.category}{" "}
                            <div className=" bg-success position-absolute"></div>{" "}
                          </div>
                        </div>
                        <Card.Body>
                          <Card.Text className=" brandText">
                            <span> Brand:</span> {item.brand}
                          </Card.Text>
                          <hr className=" m-2" />
                          <Card.Text className=" kindText">
                            {item.title}
                          </Card.Text>
                          <Card.Text className="priceText d-flex justify-content-around">
                            <p>EGP {item.price.toFixed(2)}</p>
                            <p>
                              EGP {(item.price - item.price * 0.2).toFixed(2)}
                            </p>
                            <p>(%off)</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecoundHome;
