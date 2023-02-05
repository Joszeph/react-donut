import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Donut from "../../components/Donut";
import Titles from "../../components/Titles";

import "./ready.css";

const Ready = () => {

  const title1 = "You can now come"
  const title2 = "and pick up"
  const title3 = "your amazing Donut!"

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get("data");

  return (
<>
{location.pathname === "/ready" ? 
    <div className="readyWrapperActive">
      <div className="ready-img">
        <Donut data={data} />
      </div>
      <p>
        <Titles title1={title1} title2={title2} title3={title3}/>
      </p>
      <div className="btnDone">
        <Link to="/">
          <span>Done</span>
        </Link>
      </div>
    </div> 
    :
    <div className="readyWrapper">
    <div className="ready-img">
      <Donut data={data} />
    </div>
    <p>
      <Titles title1={title1} title2={title2} title3={title3}/>
    </p>
    <div className="btnDone">
      <Link to="/">
        <span>Done</span>
      </Link>
    </div>
  </div>
  }
</>

  
  );
};

export default Ready;
