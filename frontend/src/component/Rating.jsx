import { FaStar,FaStarHalf,FaRegStar} from 'react-icons/fa'
import React from 'react'
import './rating.css'

const Rating = ({value,text}) => {
  return (
    <div className='rating'   >
        <span >
        {value>=1 ? <FaStar className='tt'/> : value>=0.5 ? <FaStarHalf className='tc'/> : <FaRegStar/>}
        {value>=2 ? <FaStar className='tt'/> : value>=1.5 ? <FaStarHalf className='tc'/> : <FaRegStar/>}
        {value>=3 ? <FaStar className='tt'/> : value>=2.5 ? <FaStarHalf className='tc'/> : <FaRegStar/>}
        {value>=4 ? <FaStar className='tt'/> : value>=3.5 ? <FaStarHalf className='tc'/> : <FaRegStar/>}
        {value>=5 ? <FaStar className='tt'/> : value>=4.5 ? <FaStarHalf className='tc'/> : <FaRegStar/>}
        </span>
        <div  ><h4>{text && text}</h4></div>

    </div>
  )
}

export default Rating