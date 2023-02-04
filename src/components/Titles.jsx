import { useLocation } from "react-router-dom";
import styles from "../styles/title.module.css";

const Titles = ({ title1, title2, title3, title2Small }) => {
  const location = useLocation();

  return (
    <div className={styles.titles}>
      <div className={styles.titleOne}>
        <p>{title1}</p>
      </div>
      {location.pathname === "/payment" ? (
        <div className={styles.titleTwoSmall}>
          <p>PAY US</p>
        </div>
      ) : (
        <div className={styles.titleTwo}>
          <p>{title2}</p>
        </div>
      )}
      <div className={styles.titleThree}>
        <p>{title3}</p>
      </div>
    </div>
  );
};

export default Titles;
