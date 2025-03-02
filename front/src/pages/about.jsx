import '../assets/css/about.css';
import "../styles/main.css"
import w1 from '../assets/images/w1.png';
import w2 from '../assets/images/w2.png';
import w3 from '../assets/images/w3.png';
import w4 from '../assets/images/w4.png';
import '../assets/css/whyus.css';

import aboutImg from '../assets/images/about.jpg';

function AboutSection() {
  return (
        <>
        
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center text-center fw-bold  col-6 offset-3 ">
          <h1 className="text-center pt-5 fw-bold  mb-4 text-primary">
            About Us
          </h1>
          <p className='after-heading text-center col-10 offset-1 text-dark fw-bold fs-3 p-1'>
            Welcome to our website. We provide the best products for you.
          </p>
        </div> 
        <div className="row d-flex justify-content-between">
        <div className="col-md-6">
            <div className="detail-box">
              <h3 className='fw-bold'>We Are QuickShop Shop</h3>
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
    <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center ">
            <h2 className='text-center fw-bold'>
              Why Choose <span className='text-info'>Us</span>
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src={w1} alt="" />
              </div>
              <div className="detail-box text-center col-9">
                <h5>
                  Expert Management
                </h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
              <img src={w2} alt="" />
              </div>
              <div className="detail-box text-center col-9">
                <h5>
                  Secure Investment
                </h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
              <img src={w3} alt="" />
              </div>
              <div className="detail-box text-center col-9">
                <h5>
                  Instant Trading
                </h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
              <img src={w4} alt="" />
              </div>
              <div className="detail-box text-center col-9">
                <h5>
                  Happy Customers
                </h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil.
                  Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </section>
        </>
      
  );
}

export default AboutSection;