import React from "react";

var test = [[[""]]];

// var mylistoforders2 = JSON.parse(localStorage.getItem('CurrentOrder'));
    
//     //if the orders don't exist
//     if (mylistoforders2 == null) {
//       console.log("mylistoforders2 doesn't exist");
//       localStorage.setItem('CurrentOrder', JSON.stringify(test));
//       // localStorage.setItem('CurrentOrder', JSON.stringify(mylistoforders));
//     }



const addToCart = (itemToAdd, index) => {
  var mylistoforders = JSON.parse(localStorage.getItem('CurrentOrder'));

  
  var thirdindex = mylistoforders[mylistoforders.length-1][index].length;
  
  mylistoforders[mylistoforders.length-1][index][thirdindex] = itemToAdd;

  localStorage.setItem('CurrentOrder', JSON.stringify(mylistoforders));
}

function itemBox({ itemImg, itemName, itemPrice, itemType }) {

  return (
    <div className="details">
      <img src={itemImg} alt="" className="imgDetails" />
      <div className="foodName">
        <h2>{itemName}</h2>
      </div>

      <div className="itemInfo">
        <div>
          <p>
            itemPrice: {itemPrice}
          </p>
        </div>
      </div>

      <div className="selectBtn">
        <button onClick={()=>addToCart(itemName, itemType)} className="btn">Select</button>
      </div>
    
    </div>
  );
}




export default itemBox;