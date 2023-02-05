import { Link } from "react-router-dom";

import Donut from "../../components/Donut";
import Titles from "../../components/Titles";
import sky_shaped from "../../assets/sky_shaped.svg";
import marble_magic from "../../assets/marble_magic.svg";
import true_blood from "../../assets/true_blood.svg";
import unicorn_dust from "../../assets/unicorn_dust.svg";

import "./menu.css";

const Menu = () => {
  const title1 = "The";
  const title2 = "MENU";

  const data = {
    skyShaped: sky_shaped,
    marbelMagic: marble_magic,
    trueBlood: true_blood,
    unicornDust: unicorn_dust,
  };

  return (
    <div className="menuWrapper">
      <div className="title-width-menu">
        <Titles title1={title1} title2={title2} />
      </div>
      <section className="menuContainer">
        <Link
          to={{ pathname: "/payment", search: `?sky_shaped=${data.skyShaped}` }}
        >
          <div className="donutEl">
            <h3>
              SKY <br />
              SHAPED
            </h3>
            <Donut data={data.skyShaped} />
          </div>
        </Link>
        <Link
          to={{
            pathname: "/payment",
            search: `?marble_magic=${data.marbelMagic}`,
          }}
        >
          <div className="donutEl">
            <h3>
              MARBLE <br />
              MAGIC
            </h3>
            <Donut data={data.marbelMagic} />
          </div>
        </Link>
        <Link
          to={{ pathname: "/payment", search: `?true_blood=${data.trueBlood}` }}
        >
          <div className="donutEl">
            <h3>
              TRUE <br />
              BLOOD
            </h3>
            <Donut data={data.trueBlood} />
          </div>
        </Link>
        <Link
          to={{
            pathname: "/payment",
            search: `?unicorn_dust=${data.unicornDust}`,
          }}
        >
          <div className="donutEl">
            <h3>
              UNICORN <br />
              DUST
            </h3>
            <Donut data={data.unicornDust} />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Menu;
