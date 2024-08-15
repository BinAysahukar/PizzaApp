import {Component} from 'react';

class About extends Component{
    render(){
        return(
            <>
            <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Delicious Pizzas..</h1>
      <p className="lead">Welcome to Pizza Store, where every pizza is a slice of happiness! Established in 2023, our mission has always been to bring the authentic flavors of Italy to your table. Inspired by our love for traditional recipes and a passion for culinary excellence, we’ve crafted a menu that’s as diverse as it is delicious..</p>
    </div>
    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img className="rounded-lg-3" src="https://img.freepik.com/free-vector/hand-drawn-pizza-pattern-background_23-2150905263.jpg?t=st=1723622355~exp=1723625955~hmac=79a91a9ccc538f6392877358d08fb87d117c5d05295283de3ff19f7ae2b6414d&w=826" alt="Pizza" width="720"/>
    </div>
  </div>
</div>
             </>
         )
     }

 }

export default About;