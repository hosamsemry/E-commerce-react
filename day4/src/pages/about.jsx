import '../assets/css/about.css';
import "../styles/main.css"

import aboutImg from '../assets/images/about.png';

function AboutSection() {
  return (
        <>
        
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center text-center fw-bold  col-6 offset-3 ">
          <h2 className="text-center pt-5 fw-bold  mb-4" style={{color:"darkgreen"}}>
            About Us
          </h2>
          <p className='text-center col-10 offset-1 text-dark fw-bold fs-4'>
            Welcome to our website. We provide the best grocery for you.
          </p>
        </div> 
        <div className="row d-flex justify-content-between">
        <div className="col-md-6">
            <div className="detail-box">
              <h3 className='fw-bold'>We Are The Green Basket Shop</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                the middle of text.
              </p>
              <p>
                Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste
                corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
              </p>
              <p>
                Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste
                corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.
              </p>
              
             
              
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src={aboutImg} alt="About Us" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
        </>
      
  );
}

export default AboutSection;