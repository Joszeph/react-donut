import  {Link}  from "react-router-dom";

import "./ready.css";

import blood from "../../assets/true_blood.svg";

const Ready = () => {
  return (
    <div className="readyWrapper">
      <div className="ready-img">
      <img src={blood} alt="" width={291.44} />
      </div>
      <p>You can now come <br />and pick up <br /> your amazing Donut!</p>
      <div className="btnDone">
        <Link to="/">
          <span>Done</span>
        </Link>
      </div>
    </div>
  );
};

export default Ready;
