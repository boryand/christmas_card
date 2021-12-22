import room from "../pictures/room.jpg";
import useSound from "use-sound";
import wood from "../sounds/wood.mp3";
import react from "react";
import { useState } from "react";
import fire from "../pictures/fire.gif";
import teddy from "../pictures/teddy.gif";
import fire_msg from "../pictures/fire_msg.png"

const Inside = () => {
  const [play] = useSound(wood);

  return (
    <div className="container1">
      <div className="cont3">
        {" "}
        <img alt="teddy bear" className="fire_msg" src={fire_msg} />
        {/* <img alt="teddy bear" className="teddy" src={teddy} /> */}
      </div>
      <div className="cont4">
        <button className="btn1"  >
         <a href="/special_wish_to_you"> click me</a> 
        </button>
        ;
        <img alt="fire gif" className="fire" src={fire} />
        <button className="btn2" onClick={play}>
        
          <a >click me</a>
        </button>
      </div>
      ;
    </div>
  );
};

export default Inside;
