import '../index.css';
import React, { useState, useEffect } from "react";

var mylistoforders = [];

var order1 = [];
var dish1 = ["bowl"];
var entrees1 = ["orange_chicken"];
var sides1 = ["chow_mein"];
var appetizers1 = ["chicken_egg_roll"];
order1.push(dish1, entrees1, sides1, appetizers1);

var order2 = [];
var dish2 = ["plate"];
var entrees2 = ["mushroom_chicken", "sweetfire_chicken_breast"];
var sides2 = ["fried_rice"];
var appetizers2 = [""];
order2.push(dish2, entrees2, sides2, appetizers2);

var order3 = [];
var dish3 = ["bigger plate"];
var entrees3 = ["black_pepper_angus_steak", "bejing_beef", "honey_walnut_shrimp"];
var sides3 = ["fried_rice"];
var appetizers3 = ["crispy_shrimp", "chicken_egg_roll"];
order3.push(dish3, entrees3, sides3, appetizers3);

mylistoforders.push(order1, order2, order3);

var databaseName = ['honey_seasame_chicken','orange_chicken','black_pepper_angus_steak','string_bean_chicken_breast','sweetfire_chicken_breast','kung_pao_chicken','black_pepper_chicken','grilled_teriyaki_chicken','broccoli_beef','bejing_beef','honey_walnut_shrimp','mushroom_chicken','eggplant_tofu','mixed_vegetables','chow_mein','fried_rice','white_steamed_rice','brown_steamed_rice','chicken_egg_roll','crispy_shrimp'];
var displayName = ['Honey Seasame Chicken', 'Orange Chicken', 'Black Pepper Angus Steak', 'String Bean Chicken Breast', 'Sweetfire Chicken Breast', 'Kung Pao Chicken', 'Black Pepper Chicken', 'Grilled Teriyaki Chicken', 'Broccoli Beef', 'Bejing Beef', 'Honey Walnut Shrimp','Mushroom Chicken', 'Eggplant Tofu', 'Mixed Vegetables', 'Chow Mein', 'Fried Rice', 'White Steamed Rice', 'Brown Steamed Rice', 'Chicken Egg Roll', 'Crispy Shrimp'];


// const CustomerDishChoiceCurrentOrder = ( /*orders*/ ) => {
  // return (
  //   <div>
  //     {mylistoforders.map((items, index) => {
  //       return (
  //         <div>
  //           {items.map((subItems, sIndex) => {
  //             return (
  //               <ol>
                
  //                 {/* {subItems.map((subsubItems, eIndex) => {
  //                   return<li>subsubItems</li>
  //                 }} */}
  //               </ol>
  //               )}
  //           })}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );

//   function click_li(eventOffsetX, eventTarget) {
//     if (eventOffsetX>=0) {
//         console.log('click on li.#'+eventTarget.id);
//         return;
//         }
//     console.log('click on bullet li.#'+eventTarget.id);
//     let sibling = eventTarget.nextElementSibling;
//     if (sibling && sibling.tagName == 'LI') 
//     sibling.classList.toggle('hideUL');
// }
  
  const CustomerDishChoiceCurrentOrder = ( /*orders*/ ) => {
    var [orders, setOrders] = useState([]);//useLocalStorage('CurrentOrder',mylistoforders);
    // useEffect(() => {
    //   localStorage.setItem('CurrentOrder', JSON.stringify(mylistoforders));
    //   console.log("BREAKPOINT1");
    // }, [mylistoforders]);

    // useEffect(() => {
    //   const currentOrder = JSON.parse(localStorage.getItem('CurrentOrder'));
    //   console.log("BREAKPOINT2");
    //   if (currentOrder) {
    //     console.log("BREAKPOINT3");
    //     setOrders(currentOrder);
    //     console.log("ORDERS: " + orders);
    //   }
    // }, []);
    var mylistoforders2 = JSON.parse(localStorage.getItem('CurrentOrder'));
    // localStorage.setItem('CurrentOrder', JSON.stringify(mylistoforders));
    const handlechange = (index, subIndex, subsubIndex) => {
      const mynewlistoforders = JSON.parse(localStorage.getItem('CurrentOrder'));
      //If if is a whole order, delete everything inside
      if (mynewlistoforders[index][subIndex][subsubIndex] === 'bowl' || mynewlistoforders[index][subIndex][subsubIndex] === 'plate' || mynewlistoforders[index][subIndex][subsubIndex] === 'bigger plate'){
        for (var i = 0; i < mynewlistoforders[index].length; i++){
          for (var j = 0; j < mynewlistoforders[index][i].length; j++){
            mynewlistoforders[index][i][j] = '';
          }
        }
      }
      else{
        mynewlistoforders[index][subIndex][subsubIndex] = '';
      }
      setOrders(mynewlistoforders);
      localStorage.setItem('CurrentOrder', JSON.stringify(mynewlistoforders));
    };

    return (
      <div>
        {mylistoforders2.map((items, index) => {
          return (
            <div>
              {items.map((subItems, subIndex) => {
                return(
                  <div>
                    {subItems.map((subsubItems, subsubIndex) => {

                      //------------------------------------------
                      if (subItems == "bowl") {
                        return ( <span onClick={() => {handlechange(index,subIndex,subsubIndex);}}><h3>Bowl</h3></span> )
                      } 
                      else if (subsubItems == "plate") {
                        return ( <span onClick={() => {handlechange(index,subIndex,subsubIndex);}}><h3>Plate</h3></span> )
                      } 
                      else if (subsubItems == "bigger plate") {
                        return ( <span onClick={() => {handlechange(index,subIndex,subsubIndex);}}><h3>Bigger Plate</h3></span> )
                      }
                      else if (subsubItems == "") {
                        return ( <span></span> ) //return nothing
                      } 
                      else {
                        return (
                          <span onClick={() => {handlechange(index,subIndex,subsubIndex);}}><li>{displayName[databaseName.indexOf(subsubItems)]}</li></span>
                        )
                      }
                      //--------------------------------------------
                    })}
                  </div>
                )
              })}
            </div>
          );
        })}
      </div>
    );
}

//-----For interating through a 2D array-----
// const CustomerDishChoiceCurrentOrder = ( /*orders*/ ) => {
//   return (
//     <div>
//       {mylistoforders.map((items, index) => {
//         return (
//           <ol>
//             {items.map((subItems, sIndex) => {
              // if (subItems == "bowl") {
              //   return ( <h3>Bowl</h3> )
              
              // } else if (subItems == "orange_chicken") {
              //   return (
              //     <li>Orange Chicken</li>
              //   )
              // } else {
              //   return (
              //     <li>{subItems}</li>
              //   )
              // }
//             })}
//           </ol>
//         );
//       })}
//     </div>
//   );
  
  
  
  export default CustomerDishChoiceCurrentOrder