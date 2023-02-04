import { Link } from "react-router-dom";

import "./payment.css";
import apple from "../../assets/apple-pay.png";
import google from "../../assets/google-pay.png";
import sky from "../../assets/sky_shaped.svg";
import unicorn from "../../assets/unicorn_dust.svg";

import Titles from "../../components/Titles";

const Payment = () => {
  const title1 = "You can";
  const title2Small = "Pay us";
  const title3 = "NOW";

  return (
    <div className="paymentWrapper">
      <div className="titles-width-pay">
        <Titles title1={title1} title2Small={title2Small} title3={title3} />
      </div>
      <div className="pay-btns">
        <Link to="/preparation">
          <div class="pay">
            <img src={apple} alt="Apple Pay" />
          </div>
        </Link>
        <Link to="/preparation">
          <div class="pay">
            <img src={google} alt="Google Pay" />
          </div>
        </Link>
      </div>
      <div className="images">
        <img src={sky} alt="" width={262} />
        <img src={unicorn} alt="" width={262} />
      </div>
    </div>
  );
};

export default Payment;
