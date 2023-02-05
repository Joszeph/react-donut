import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Donut from "../../components/Donut";
import Titles from "../../components/Titles";

import "./preaparation.css";

const Preparation = () => {

  const title1 = "Preparing...";

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const data = params.get("data");

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate({
        pathname: "/ready",
        search: `?data=${data}`,
      });
    }, 5000);
  }, [data, navigate]);

  return (
    <div className="prepWrapper">
      <div className="bg-img">
        <Donut data={data} />
      </div>
      <Titles title1={title1}/>
    </div>
  );
};

export default Preparation;
