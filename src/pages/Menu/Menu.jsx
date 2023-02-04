import React from "react";
import "./menu.css";
import Payment from '../Payment/Payment'

import Donut from "../../components/Donut";
import Titles from "../../components/Titles";
import sky from "../../assets/sky_shaped.svg";
import marble from "../../assets/marble_magic.svg";
import blood from "../../assets/true_blood.svg";
import unicorn from "../../assets/unicorn_dust.svg";

const Menu = ({app}) => {
  const title1 = "The";
  const title2 = "MENU";

  const donutSky = sky
  const donutMarble = marble
  const donutBlood = blood
  const donutUnicorn = unicorn


  const selectDonut = (dPath) => {
    app.render(
        <React.StrictMode>
            <Payment app={app} donutPath={dPath} />
        </React.StrictMode>
    );
};

  return (
    <div className="menuWrapper">
      <div className="title-width-menu">
      <Titles title1={title1} title2={title2} />
      </div>
      <section className="menuContainer">
      
          <div className="donutEl"
          onClick={()=>selectDonut(donutSky)}
          >
            <h3>
              SKY <br />
              SHAPED
            </h3>
            <Donut donut={donutSky} path={donutSky}/>
          </div>
      
    
          <div className="donutEl"
          onClick={()=>selectDonut(donutMarble)}
          >
            <h3>
              MARBLE <br />
              MAGIC
            </h3>
            <Donut donut={donutMarble} path={donutMarble}/>
          </div>
   

          <div className="donutEl"
           onClick={()=>selectDonut(donutBlood)}
          >
            <h3>
              TRUE <br />
              BLOOD
            </h3>
            <Donut donut={donutBlood} path={donutBlood}/>
          </div>
 
    
          <div className="donutEl"
          onClick={()=>selectDonut(donutUnicorn)}
          >
            <h3>
              UNICORN <br />
              DUST
            </h3>
            <Donut donut={donutUnicorn} path={donutUnicorn}/>
          </div>

      </section>
    </div>
  );
};

export default Menu;
