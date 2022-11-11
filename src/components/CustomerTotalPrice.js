import React, { Component } from 'react'

// var callAPIAsyncNameToID = async (itemName) => {
//     (await fetch(`http://localhost:3000/inventory/${itemName}`)).text();
// }

var callAPIAsyncGetPrice = async (dishId, idString) => {
    (await fetch(`http://localhost:3000/dish_list/price?dish_id=${dishId}${idString}`)).text();
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
            totalPrice = totalPrice + callAPIAsyncGetPrice(dish_id, resultString);
        }

    }
    return totalPrice;
}


class CustomerTotalPrice extends Component   {


    constructor(props) {
        super(props);
        this.state = {price: ""}
    }

    componentDidMount() {
        returnPrice(JSON.parse(localStorage.getItem('CurrentOrder')))
            .then(price => this.setState({price: price}));
    }

    render(){
        return (
            // <div>{returnPrice(JSON.parse(localStorage.getItem('CurrentOrder')))}</div>
            <div>{this.state.price}</div>
            // <div>Pending</div>
        )
    }
}

export default CustomerTotalPrice