import { useLocation } from 'react-router-dom'

const Donut = ({data}) => {

  const location = useLocation()

  return (
    <>
    {location.pathname === '/menu' ? 
    <img src={data} alt="" width={108.45} height={104.72} /> :
    <img src={data} alt="" width={291.44} height={291.44} />
    }
     
    </>
  );
};

export default Donut;
