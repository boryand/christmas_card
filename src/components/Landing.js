import snow from "../pictures/snow.gif";
import house_msg from "../pictures/house_msg.png"
import santa from "../pictures/santa.gif"

const Landing = () => {
  return (
    <div className="container">
      <img className="snow" alt="falling snow" src={snow} />
      <img className="house_msg" alt="falling snow" src={house_msg} />
      <img className="santa" alt="falling snow" src={santa} />

      <a className="house" href="/welcome_home"><span></span></a>
    </div>
  );
};

export default Landing;
