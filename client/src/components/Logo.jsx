import logo from '../assets/images/logo.svg';

const Logo = () => {
  return (
    <img
      src={logo}
      alt="careerpath"
      style={{ width: "150px", height: "100px" }}
      className="logo"
    />
  );
};

export default Logo;
