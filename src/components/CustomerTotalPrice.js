import React from 'react'

var callAPIAsyncNameToID = async (itemName) => {
    (await fetch(`http://localhost:3000/inventory/${itemName}`)).text();
}

var callAPIAsyncGetPrice = async (dishId, idString) => {
    (await fetch(`http://localhost:3000/dish_list/price?dish_id=${dishId}${idString}`)).text();
}

const returnPrice = (MyListOfOrders) => {
    var totalPrice = 0;
    console.log("YO" + MyListOfOrders);
    for (var i = 0; i < MyListOfOrders.length; i++){
        var dishtype = MyListOfOrders[i][0][0];
        var dish_id = 1;
        if(dishtype == "bowl"){
            dish_id = 1;
        }
        else if(dishtype == "plate"){
            dish_id = 2;
        }
        else if(dishtype == "bigger plate"){
            dish_id = 3;
        }
        var everythingInTheDish = []
        for (var j = 1; j < MyListOfOrders[i].length; j++){
            for (var k = 0; k < MyListOfOrders[i][j].length; k++){
                if (MyListOfOrders[i][j][k] === ""){
                    continue;
                }
                else{
                    //push all the id's
                    everythingInTheDish.push(callAPIAsyncNameToID(MyListOfOrders[i][j][k]));
                }
            }
        }
        var resultString = "";
        for (var i = 0; i < everythingInTheDish.length; i++){
            resultString += "&item=" + everythingInTheDish[i];
        }
        console.log("everything in the dish: " + resultString);
        totalPrice = totalPrice + callAPIAsyncGetPrice(dish_id, resultString);
        return totalPrice;
    }
}


const CustomerTotalPrice = () => {
  return (
    // <div>{returnPrice(JSON.parse(localStorage.getItem('CurrentOrder')))}</div>
    <div>Pending</div>
  )
}

export default CustomerTotalPrice