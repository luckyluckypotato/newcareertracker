import pic from "../assets/images/hello.svg";

const Image = () => {
  return (
    <div>
      <img
        src={pic}
        alt="careerpath"
        style={{ width: "280px", height: "100px", marginBottom: "30px" }}
      />
    </div>
  );
};

export default Image;
