import { useState } from "react";
import play from "../assets/play.png"
import sign from "../assets/info.png"

const VideoTitle = ({ title, overview}) => {

  const [info, setInfo] = useState(false);

  const handleInfo = () => {
    setInfo((prev) => !prev);
  };

  return (
    <div className="absolute w-screen aspect-video top-0 grid place-items-center justify-items-start bg-gradient-to-r from-black">
      <div className="w-1/2 grid gap-4 p-8">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className={`text-white ${info ?"block": "hidden"}`}>{overview}</p>
        <div className="flex items-center gap-2">
          <button
            onClick={handleInfo}
            className="p-2 flex items-center gap-2 text-white bg-gray-300 bg-opacity-20 rounded-sm"
          >
            <img src={sign} alt="" className="w-6" />
            More Info
          </button>
          <button className="bg-white font-bold  text-slate-950 p-2 rounded-sm flex gap-2 items-center hover:opacity-75"> <img src={play} alt="" className="w-6" /> Play</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
