import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/team.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            <span>CareerPath</span> Tracker
          </h1>
          <p>
            Embark on your job hunting journey with CareerPath Tracker, your
            ultimate tool for organizing and monitoring your job applications.
            Effortlessly track the positions you've applied for, from pending
            applications to interviews and offers. Gain clarity with our
            intuitive dashboard that showcases your application statuses,
            including pending, interviews, and rejections. Let CareerPath
            Tracker empower you with insights and statistics on your job search
            progress, helping you to refine your strategy and secure your dream
            job.
          </p>
          <div style={{marginTop: "60px"}}>
            <Link to="/register" className="btn register-link">
              Register
            </Link>
            <Link to="/login" className="btn">
              Login / Demo User
            </Link>
          </div>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
