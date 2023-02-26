import React from 'react';
import star from "../assets/images/star-rating.svg";

const StarRating = () => {
  return (
    <div className='flex items-center gap-x-2'>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
    </div>
  )
}

export default StarRating