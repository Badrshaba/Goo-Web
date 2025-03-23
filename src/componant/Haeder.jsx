import React, { useEffect, useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { ImCart } from 'react-icons/im';
import '../page/style/Haeder.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi';
import SidBar from '../page/sidbar/SidBar';
import { Link, useNavigate } from 'react-router-dom';
import img from '../images/shopping_cart.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../system/ProdutsSlice';

const Haeder = () => {
  const [show, setShow] = useState(false);
  const [search, setsearch] = useState('');
  const move = useNavigate();
  const { cart } = useSelector((e) => e.products);
  const moveOn = () => move(`/products/search/${search}`);
  const dispatsh = useDispatch();
  useEffect(() => {
    dispatsh(getAllProducts);
  }, [cart]);
  const searchResults = (e) => {
    e.preventDefault();
    setsearch(e.target.value);
  };

  return (
    <div className=' FirstHeader'>
      <div className=' bg-success bg-gradient head w-100 position-fixed '>
        <div className='text-white  widthNavBar '>
          <div className=' d-flex justify-content-between firstHead pt-2'>
            <div>
              {' '}
              <p className=''>
                Follow us on{' '}
                <span>
                  <BsFacebook />
                </span>
                <span className=' ms-2'>
                  <BsInstagram />
                </span>{' '}
              </p>
            </div>
            <div className=' d-flex  text-center HeadSupport '>
              <div className=' d-flex align-items-center w-100'>
                <span className=' fs-6'>
                  <BsFillQuestionCircleFill />
                </span>
                <p>Support </p> <p>Rigister</p> <p className=' border-0'>Log in</p>
              </div>
            </div>
          </div>
          <div className=' d-flex justify-content-evenly flex-wrap  headNavbar'>
            <div className='divLogo'>
              {' '}
              {/* <SidBar /> */}
              <Link
                to={'/'}
                className=' logoNavbar'>
                <FaShoppingBag />
                <span className=' fw-bold'>Goo</span> Web
              </Link>
            </div>
            <div className='  divInput'>
              <div className=' position-relative d-flex justify-content-center'>
                <input
                  className=' border-0'
                  placeholder='Search your preferred items here'
                  type='text'
                  value={search}
                  onChange={searchResults}
                />
                <div className=' position-absolute searchIcon'>
                  <BiSearchAlt2 onClick={search != '' ? moveOn : null} />
                </div>
              </div>

              <div className='d-flex textBar'>
                <p
                  className='me-0'
                  onClick={() => move('/categories/smartphones')}>
                  Smartphones
                </p>
                <p onClick={() => move('/categories/laptops')}>Laptops</p>
                <p onClick={() => move('/categories/fragrances')}>Fragrances</p>
                <p onClick={() => move('/categories/skincare')}>Skincare</p>
                <p onClick={() => move('/categories/groceries')}>Groceries</p>
                <p
                  className='divNone'
                  onClick={() => move('/categories/home-decoration')}>
                  Home Decoration
                </p>
                <p onClick={() => move('/categories/furniture')}>Furniture</p>
                <p onClick={() => move('/categories/tops')}>Tops</p>
              </div>
            </div>
            <div
              className=' divHover'
              onMouseLeave={() => setShow(false)}>
              <div
                className=' position-relative'
                onClick={() => move('/cart')}
                onMouseOver={() => setShow(true)}>
                <div className='text-black position-absolute bg-white divCart'>{cart.length}</div>
                <ImCart className='cart' />

                {cart && show && (
                  <div className='position-absolute hoverDiv p-2 bg-white'>
                    <p className=' fs-6 pt-1 text-black-50 text-center mb-2'>Recently Added Products</p>
                    {cart.length ? (
                      <>
                        {cart.map((product, index) => (
                          <div
                            key={index}
                            className=' d-flex justify-content-around text-nowrap align-items-center pt-3 pb-3 mb-2 border-bottom '>
                            <img
                              height={'30%'}
                              src={product.images[0]}
                              width={'20%'}
                              alt=''
                            />
                            <p className=' text-black-50'> {product.brand}</p>
                            <p className=' text-success fw-bold'> EGP {product.price} </p>
                          </div>
                        ))}

                        <div className=' d-flex justify-content-end'>
                          <Link to={'/cart'}>
                            <button className='bg-success border-0  text-white p-2 m-1 pe-4 ps-4'>View My Shopping Cart</button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className=' pt-2 d-flex justify-content-center'>
                          <img
                            src={img}
                            width={'50%'}
                            alt=''
                          />
                        </div>
                        <p className=' text-black text-center'>No product yet</p>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haeder;
