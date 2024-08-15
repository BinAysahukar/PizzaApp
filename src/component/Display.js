import { useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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