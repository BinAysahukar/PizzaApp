import { useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// function Display() {
//     return(
//         <>
// <div className="row row-cols-1 row-cols-md-3 g-4">
//   <div className="col">
//     <div className="card h-100">
//       <img src="https://i0.wp.com/palatablepastime.com/wp-content/uploads/2023/02/trad-chicago-deep-dish-og-whole.jpg?resize=768%2C401&ssl=1" height={260} className="card-img-top" alt="chicago pizza"/>
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
      
//     </div>
//   </div>
//   <div className="col">
//     <div className="card h-100">
//       <img src="https://www.tasteofhome.com/wp-content/uploads/2018/09/brick-oven-pizza.jpg?fit=1024,683" height={260} className="card-img-top" alt="brick oven pizza"/>
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//       </div>
      
//     </div>
//   </div>
//   <div className="col">
//     <div className="card h-100">
//       <img src="https://cdn.shopify.com/s/files/1/0516/5052/7402/files/real_pizza_from_italy_480x480.jpg?v=1677165222" height={260} className="card-img-top" alt="Italian Pizza"/>
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
//       </div>
      
//     </div>
//   </div>
// </div>

// </>
// )
// }
// <h1>Display</h1>
function Display(){


const [pizzas , setPizzas]=useState([]);
const navigate=useNavigate();

useEffect(()=>{
    fetchPizzas();
}, [])

const fetchPizzas =()=>{
    axios.get('http://localhost:5000/items')
        .then(response => {
            setPizzas(response.data);
        })
        .catch(error => {
            console.error('There was an error fetching the pizza data',error)
        })
}

const handleDelete =(id)=>{
    axios.delete(`http://localhost:5000/items/${id}`)
        .then(response => {
            fetchPizzas();
        })
        .catch(error => {
            console.error('There was an error deleting the pizza data',error)
        })
}

return (
    <div className="container mt-4">
        <h2>Pizza List</h2>
        <div className="row">
            {pizzas.map(pizza => (
                <div className="col-md-4" key={pizzas.id}>
                <div className="card mb-4">
                    <img src={pizza.image} height={260}  className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title" >{pizza.name}</h5>
                        <p className="card-text">Name: {pizza.name}</p>
                        <p className="card-text">Price: ${pizza.price}</p>
                        <button className="btn btn-danger me-2" onClick={()=> handleDelete(pizza.id)}>Delete</button>
                        <button className="btn btn-warning" onClick={() => navigate(`/UpdateItem/${pizza.id}`)}>Update</button>
                    </div>
                    </div>
                </div>


            ))}
        </div>


    </div>
)
}



export default Display;