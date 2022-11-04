import React from "react";
import StarRatings from 'react-star-ratings';

//TODO Should read rating info from database
//TODO star rating reference: https://www.npmjs.com/package/react-star-ratings, https://juejin.cn/post/6844903858523783176


function Stars(){
    return (
        <StarRatings
        rating={2.403}
        starRatedColor="#FFD100"
        starDimension="20px"
        starSpacing="0"
      />
    );
};

export default Stars;