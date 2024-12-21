import { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [info, setInfo] = useState(false);

  const handleInfo = () => {
    setInfo((prev) => !prev);
  };

  return (
    <div className="border-2 bg-black bg-opacity-55 border-red-500 border-solid p-2 flex flex-col gap-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className={`${info ?"opacity-100 text-white transition-opacity duration-300 ease-in"
      : "opacity-0"}`}>{overview}</p>
      <div className="flex items gap-2">
        <button
          onClick={handleInfo}
          className="p-2 text-white bg-gray-300 bg-opacity-20 rounded-sm"
        >
          {" "}
          More Info
        </button>
        <button className="bg-white font-bold text-slate-950 p-2 rounded-sm">Play</button>
      </div>
    </div>
  );
};

export default VideoTitle;
