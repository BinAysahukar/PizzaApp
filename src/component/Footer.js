import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <div className="container">
         <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
            <li className="nav-item"><Link to="/Display" className="nav-link px-2 text-body-secondary">Display All Items</Link></li>
            <li className="nav-item"><Link to="/AddNewItem" className="nav-link px-2 text-body-secondary">Add New Items</Link></li>
            <li className="nav-item"><Link to="/Contact" className="nav-link px-2 text-body-secondary">Contact</Link></li>
            <li className="nav-item"><Link to="/About" className="nav-link px-2 text-body-secondary">About</Link></li>
           </ul>
    <p className="text-center text-body-secondary">© 2024 PizzaZillaa, binAy</p>
  </footer>
</div>
        </>
    )
}
export default Footer;