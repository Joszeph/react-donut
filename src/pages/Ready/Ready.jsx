import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Donut from "../../components/Donut";

import "./ready.css";

const Ready = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get("data");

  return (
    <div className="readyWrapper">
      <div className="ready-img">
        <Donut data={data} />
      </div>
      <p>
        You can now come <br />
        and pick up <br /> your amazing Donut!
      </p>
      <div className="btnDone">
        <Link to="/">
          <span>Done</span>
        </Link>
      </div>
    </div>
  );
};

export default Ready;
