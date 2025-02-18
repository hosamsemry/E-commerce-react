import '../assets/css/info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Info () {
    return(
        <section className="info_section layout_padding2 className='fixed-bottom' ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>
                  Address
                </h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                      Location
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>
                      Call +01 1234567890
                    </span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                      demo@gmail.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="info_social">
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>
                  Info
                </h4>
                <p className='text-light'>
                  necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>
                  Links
                </h4>
                <div className="info_links">
                  <a className="" href="about">
                    About
                  </a>
                  <a className="" href="team">
                    Team
                  </a>
                  <a className="" href="whyus">
                    Why Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col ">
              <h4>
                Subscribe
              </h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Info;