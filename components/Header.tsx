import { useState } from "react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   const [active, setActive] = useState(false);

   return (
      <header>
         <div className="header custom-container">
            <button onClick={() => setActive(!active)}>
               {active ? (
                  <IoVolumeHigh size={30} />
               ) : (
                  <IoVolumeMute size={30} />
               )}
            </button>
         </div>
      </header>
   ); 
};

export default Header;
