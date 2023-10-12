import { useState } from "react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   const [active, setActive] = useState(false);
   const [playMusic, setPlayMusic] = useState(false);

   return (
      <header>
         <div className="header custom-container">
            <button
               onClick={() => {
                  setActive(!active), setPlayMusic(!playMusic);
               }}
            >
               {active ? (
                  <IoVolumeHigh size={30} />
               ) : (
                  <IoVolumeMute size={30} />
               )}
            </button>
            <audio controls autoPlay={playMusic} src="/music/love.mp3"></audio>
         </div>
      </header>
   );
};

export default Header;
