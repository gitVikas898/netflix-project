import { useState } from "react";
import play from "../assets/play.png"
import sign from "../assets/info.png"

const VideoTitle = ({ title, overview}) => {

  const [info, setInfo] = useState(false);

  const handleInfo = () => {
    setInfo((prev) => !prev);
  };

  return (
    <div className=" bottom-28 left-7 bg-black bg-opacity-75 p-2 flex flex-col gap-4 w-1/2">
      <div className="w-full grid gap-4">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className={`text-white ${info ?"block"
        : "hidden"}`}>{overview}</p>
      </div>
      <div className="flex items gap-2">
        <button
          onClick={handleInfo}
          className="p-2 flex items-center gap-2 text-white bg-gray-300 bg-opacity-20 rounded-sm"
        >
          <img src={sign} alt="" className="w-8" />
          More Info
        </button>
        <button className="bg-white font-bold text-slate-950 p-2 rounded-sm flex gap-2 items-center"> <img src={play} alt="" className="w-8" /> Play</button>
      </div>
    </div>
  );
};

export default VideoTitle;
