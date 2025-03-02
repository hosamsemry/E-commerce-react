import "../styles/main.css"
import '../assets/css/contactus.css';




function ContactUs() {
  return (
    <section className="contact_section layout_padding ">
      <div className="container">
        <div className="heading_container heading_center">
          <h2 className='text-center fw-bold my-5'>
            Contact <span className='text-warning'>Us</span>
          </h2>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <form action="">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <div className="contact-info">
              <h5>Contact Information</h5>
              <p><strong>Address:</strong> 123 Main Street, Anytown, USA</p>
              <p><strong>Phone:</strong> (123) 456-7890</p>
              <p><strong>Email:</strong> info@example.com</p>
              <p><strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;