import './preaparation.css'

import blood from "../../assets/true_blood.svg";

const Preparation = () => {
  return (
    <div className='prepWrapper'>
      <div className="bg-img">
        <img src={blood} alt="" width={291.44}/>
      </div>
      <p>Preparing...</p>
    </div>
  )
}

export default Preparation