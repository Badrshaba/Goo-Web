import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getSearchResult } from '../../system/SearchSlice'
import "../style/Home.css"
import Card from 'react-bootstrap/Card';
import { InfinitySpin } from  'react-loader-spinner'
import Scroll from '../../componant/Scroll'
const Search = () => {
  const {product} = useParams()
  const {searchResult,loading} = useSelector(e=>e.searchResult)
  const dispatsh = useDispatch()
  useEffect(()=>{
    dispatsh(getSearchResult(product))
  },[product])
  const move = useNavigate()
  
  return (
    <div className=' screen justify-content-center'>
      <Scroll/>
            {loading ? (
              <div className=" d-flex justify-content-center"><InfinitySpin width="200" color="#4fa94d" /></div>
            ) :searchResult.products&&searchResult.products.length?
      <div className=' container'>
      <div className='mt-5 headCategories'><h3>SEE OUR Search Result</h3></div>


      <div className=' d-flex justify-content-around flex-wrap mt-3'>{searchResult.products.map((item,index)=>(
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
    </div>:<div>
     <div className='' >
     <h2 className=' text-success text-center mt-3'>no product found</h2>
     </div>
    </div>
      
      
      }
      </div>
  )
}

export default Search