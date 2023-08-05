import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenu } from "react-icons/ai";
import "../style/SidBar.css";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { getCategroy } from "../../system/CategorySlice";
const SidBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const {categroy,loading}=useSelector(e=>e.categroy)
  useEffect(()=>{
    dispatch(getCategroy())
  },[])

 

  return (
    <>
      <div className=" iconSidBar"><AiOutlineMenu onClick={handleShow} /></div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>All CATEGORIES</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className=" catagory p-0 m-2">
          {categroy.length&&categroy.map((kind,index)=>(
          <div className=" border-bottom " key={index}>
          <Link className=" item pb-2 mb-0  pt-2" to={`/categories/${kind}`}  onClick={handleClose} >{kind}</Link>
        </div>
          ))}


        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default SidBar;
