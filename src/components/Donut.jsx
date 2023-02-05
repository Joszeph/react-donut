import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Donut = ({ data }) => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/menu" ? (
        <motion.img
          animate={{ rotate: 360 }}
          transition={{
            scale: 1,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
          }}
          initial={{
            scale: 1,
          }}
          src={data}
          alt=""
          width={108.45}
          height={104.72}
        />
      ) : (
        <motion.img
          animate={{ rotate: 360 }}
          transition={{
            scale: 1,
            repeat: Infinity,
            duration: 2.5,
          }}
          initial={{
            scale: 1,
          }}
          src={data}
          alt=""
          width={291.44}
          height={291.44}
          style={{ filter: "drop-shadow(2px 2px 11px #552041b9)" }}
        />
      )}
    </>
  );
};

export default Donut;
