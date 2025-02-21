import team1 from '../assets/images/team-1.jpg';
import team2 from '../assets/images/team-2.jpg';
import team3 from '../assets/images/team-3.jpg';
import team4 from '../assets/images/team-4.jpg';
import '../assets/css/team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Team() {
    const teamMembers = [
      { name: 'John Doe', role: 'Marketing Head', image: team1 },
      { name: 'Jane Smith', role: 'Project Manager', image: team2 },
      { name: 'Mike Johnson', role: 'Lead Developer', image: team3 },
      { name: 'Emily Davis', role: 'UI/UX Designer', image: team4 }
    ];

    return (
      <section className="team_section layout_padding mt-5">
        <div className="container-fluid">
          <div className="heading_container heading_center ">
            <h1 className="pt-5 fw-bold ">
              Our <span className="text-success"> Team</span>
            </h1>
          </div>

          <div className="team_container p-5">
            <div className="row">
              {teamMembers.map((teamMember, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <div className="box">
                    <div className="img-box">
                      <img src={teamMember.image} className="img1" alt={teamMember.name} />
                    </div>
                    <div className="detail-box text-center ">
                      <h5>{teamMember.name}</h5>
                      <p className='text-light'>{teamMember.role}</p>
                    </div>
                    <div className="social_box">
                      <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                      <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                      <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Team;