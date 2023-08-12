import React, { useEffect } from 'react'
import "../style/CategoriesDetails.css"
import { useNavigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryDetails } from '../../system/CategoryDetailsSlice'
import { InfinitySpin } from  'react-loader-spinner'
const CategoriesDetails = () => {

const {type} = useParams()
const dispatsh = useDispatch()
const {categoryDetails,loading} = useSelector(e=>e.categoryDetails)
useEffect(()=>{
  dispatsh(getCategoryDetails(type))
},[type])
const move = useNavigate()


  return (
    <div className=' container'>

      {loading ? (
              <div className=" d-flex justify-content-center"><InfinitySpin width="200" color="#4fa94d" /></div>
            ) :categoryDetails.products&&
      <>
      <div className='mt-5 headCategories'><h3>SEE OUR {type.toUpperCase()}</h3></div>


      <div className=' d-flex justify-content-around flex-wrap mt-3'>{categoryDetails.products.map((item,index)=>(
                  <Card key={index}  style={{ width: '18rem',height:'20rem' }} className='m-2 cardHome'onClick={()=>move(`/product/${item.id}`)}>
                  <div style={{background:`url(${item.images[0]})`}} className=' position-relative imgHome'>
<div className=' bg-success position-absolute categoryDiv'>{item.category}  <div className=' bg-success position-absolute'></div> </div>
                  </div>
                  <Card.Body>
                    <Card.Text className=' brandText'>
           <span> Brand:</span> {item.brand}
                    </Card.Text> 
                    <hr  className=' m-2'/>
                    <Card.Text className=' kindText'>
            {item.title}
                    </Card.Text>
                    <Card.Text className='priceText d-flex justify-content-around'>
            <p>EGP {item.price.toFixed(2)}</p>
            <p>EGP {(item.price-(item.price*.2)).toFixed(2)}</p>
            <p>(%off)</p>

                    </Card.Text>
                  </Card.Body>
                </Card>
    ))}
</div>


      </>
      
      
      }
       
                  

    </div>
  )
}

export default CategoriesDetails