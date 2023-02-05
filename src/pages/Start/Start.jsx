import { Link } from "react-router-dom";

import Titles from "../../components/Titles";

import unicorn from "../../assets/unicorn_dust.svg";
import blood from "../../assets/true_blood.svg";

import "./start.css";

const Start = () => {
  const title1 = "The";
  const title2 = "DONUT";
  const title3 = "SHOP";

  return (
    <div className="startWrapper">
      <div className="sparkles">
        <div className="donutsImg">
          <img src={unicorn} alt="unicorn dust" />
          <img src={blood} alt="true blood" />
        </div>
      </div>
      <div className="title-width">
        <Titles title1={title1} title2={title2} title3={title3} />
      </div>
      <div className="btnStart">
        <Link to="/menu">
          <span>Start</span>
        </Link>
      </div>
    </div>
  );
};

export default Start;
