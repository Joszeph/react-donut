import { useLocation, Link } from "react-router-dom";

import apple from "../../assets/apple-pay.png";
import google from "../../assets/google-pay.png";
import sky from "../../assets/sky_shaped.svg";
import unicorn from "../../assets/unicorn_dust.svg";

import Titles from "../../components/Titles";

import "./payment.css";

const Payment = () => {
  const title1 = "You can";
  const title2Small = "Pay us";
  const title3 = "NOW";

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name1 = params.get("sky_shaped");
  const name2 = params.get("marble_magic");
  const name3 = params.get("true_blood");
  const name4 = params.get("unicorn_dust");

  return (
    <div className="paymentWrapper">
      <div className="titles-width-pay">
        <Titles title1={title1} title2Small={title2Small} title3={title3} />
      </div>
      <div className="pay-btns">
        <Link
          to={{
            pathname: "/preparation",
            search: `?data=${name1 || name2 || name3 || name4}`,
          }}
        >
          <div className="pay">
            <img src={apple} alt="Apple Pay" />
          </div>
        </Link>
        <Link
          to={{
            pathname: "/preparation",
            search: `?data=${name1 || name2 || name3 || name4}`,
          }}
        >
          <div className="pay">
            <img src={google} alt="Google Pay" />
          </div>
        </Link>
      </div>
      <img src="" alt="" width={262} />
      <div className="images">
        <img src={sky} alt="" width={262} />
        <img src={unicorn} alt="" width={262} />
      </div>
    </div>
  );
};

export default Payment;
