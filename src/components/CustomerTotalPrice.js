import React, { Component } from 'react'

// var callAPIAsyncNameToID = async (itemName) => {
//     (await fetch(`http://localhost:3000/inventory/${itemName}`)).text();
// }

var callAPIAsyncGetPrice = async (dishId, idString) => {
    //console.log((await (await fetch(`http://localhost:3000/dish_list/price?dish_id=${dishId}${idString}`)).json()));
    const promise = fetch(`http://localhost:3000/dish_list/price?dish_id=${dishId}${idString}`);
    const response = await promise;
    const result = await response.json();
    return result.price;
}

var addToOrderHistory = async (dishId, idString) => {
    //console.log((await (await fetch(`http://localhost:3000/dish_list/price?dish_id=${dishId}${idString}`)).json()));
    const promise = fetch(`http://localhost:3000/dish_list/price?dish_id=${dishId}${idString}`);
}

const returnPrice = async (MyListOfOrders) => {
    var totalPrice = 0;
    console.log("List sent to function: " + MyListOfOrders);
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
                    everythingInTheDish.push(MyListOfOrders[i][j][k]);
                }
            }
        }
        if (everythingInTheDish.length != 0){
            console.log("EVERYTHING IN DISH Array: " + everythingInTheDish);
            var resultString = "";
            for (var i = 0; i < everythingInTheDish.length; i++){
                resultString += "&item=" + everythingInTheDish[i];
            }
            console.log("Everything in the string sending to API: " + resultString);
            totalPrice = totalPrice + await callAPIAsyncGetPrice(dish_id, resultString);
            console.log("New total price: " + totalPrice);
        }

    }
    return totalPrice;
}


class CustomerTotalPrice extends Component   {


    constructor(props) {
        super(props);
        this.state = {price: ""}
    }

    async componentDidMount() {
        const price = await returnPrice(JSON.parse(localStorage.getItem('CurrentOrder')));
        this.setState({price: price});
    }

    render(){
        return (
            // <div>{returnPrice(JSON.parse(localStorage.getItem('CurrentOrder')))}</div>
            <div>Hello: {this.state.price}</div>
            // <div>Pending</div>
        )
    }
}

export default CustomerTotalPrice