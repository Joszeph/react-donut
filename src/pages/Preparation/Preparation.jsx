import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Donut from "../../components/Donut";

import "./preaparation.css";

const Preparation = () => {
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
      <p>Preparing...</p>
    </div>
  );
};

export default Preparation;
