import React from "react";

/**
 * @author
 * @function Banner
 **/

const Banner = (props) => {
    // step2 value=
  return (
    <div>
      <input type="text" onChange={props.appTitleChangeCallback} 
      value ={props.name} />
    </div>
  );
};
export default Banner;

