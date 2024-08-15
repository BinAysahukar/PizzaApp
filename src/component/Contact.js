function Contact() {
    return(
        <>     
 

<div className="container my-5" >
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis">contact Us</h1>
      <div className="m-1">



<div className="fs-6 fw-light mb-2">Post your message below. We will get back to you ASAP</div>
<form id="contact_form" name="contact_form" method="post">
    <div className="mb-5">
        <label for="message" >Message</label>
        <textarea className="form-control" id="message" name="message" rows="5"></textarea>
    </div>
    <div class="mb-5 row">
        <div className="col">
            <label>Your Name:</label>
            <input type="text" required maxlength="50" className="form-control" id="name" name="name"/>
        </div>
        <div className="col">
            <label for="email_addr">Your Email:</label>
            <input type="email" required maxlength="50" className="form-control" id="email_addr" name="email"
                placeholder="name@example.com"/>
        </div>
    </div>
    <div className="d-grid">
    <button type="submit" className="btn btn-success">Post</button>
    </div>
</form>
</div>
    </div>
    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img className="rounded-lg-3"  src="https://img.freepik.com/free-vector/hand-drawn-pizza-pattern-background_23-2150905263.jpg?t=st=1723622355~exp=1723625955~hmac=79a91a9ccc538f6392877358d08fb87d117c5d05295283de3ff19f7ae2b6414d&w=826" alt="Pizza" width="720"/>
    </div>
  </div>
</div>


        </>
    )
}
export default Contact;