import {
  SunIcon,
  CalendarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

import { FaWind } from "react-icons/fa";
import { MdWaterDrop, MdDeviceThermostat } from "react-icons/md";

const Weather: React.FC = () => {
  return (
    <div id="weather" className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" max-w-3xl mx-auto flex justify-between mt-6">
          <p className="flex items-center font-bold">
            <SunIcon className="h-8 mr-2" />
            Sunny
          </p>
          <div className="flex items-center">
            <MdDeviceThermostat className="text-white w-6 h-6" />
            <p className="font-bold">81 &deg;F</p>
          </div>
        </div>
        <div className="mt-16 p-4 bg-white/70 max-w-3xl mx-auto rounded-md">
          <div id="week" className="flex justify-between">
            {/* TODO: map through week and render following divs */}
            <div className="h-16 w-14 rounded-md text-white flex flex-col justify-center items-center bg-emerald-600">
              <p className="font-bold">15</p>
              <p className="text-sm">Sun</p>
            </div>
            <div className="h-16 w-14 bg-white rounded-md text-black flex flex-col justify-center items-center">
              <p className="font-bold">16</p>
              <p className="text-sm">Mon</p>
            </div>
            <div className="h-16 w-14 bg-white rounded-md text-black flex flex-col justify-center items-center">
              <p className="font-bold">17</p>
              <p className="text-sm">Tue</p>
            </div>
            <div className="h-16 w-14 bg-white rounded-md text-black flex flex-col justify-center items-center">
              <p className="font-bold">18</p>
              <p className="text-sm">Wed</p>
            </div>
            <div className="h-16 w-14 bg-white rounded-md  text-black flex flex-col justify-center items-center">
              <CalendarDaysIcon className="text-emerald-600 w-8 h-8" />
            </div>
          </div>
          <div id="info" className="flex justify-between mt-6">
            <div className="flex items-center">
              <div className="flex justify-center items-center w-8 h-8 rounded-md mr-2 bg-white">
                <SunIcon className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <p className="text-slate-600 text-xs font-semibold">Light</p>
                <p className="text-lg font-bold text-black/70 leading-none">
                  5,8k lux
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex justify-center items-center w-8 h-8 rounded-md mr-2 bg-white">
                <FaWind className="text-green-300 w-5 h-5" />
              </div>
              <div>
                <p className="text-slate-600 text-xs font-semibold">Wind</p>
                <p className="text-lg font-bold text-black/70 leading-none">
                  10m/h
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex justify-center items-center w-8 h-8 rounded-md mr-2 bg-white">
                <MdWaterDrop className="text-blue-400 text-green-300 w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-600 text-xs font-semibold">Humidity</p>
                <p className="text-lg font-bold text-black/70  leading-none">
                  76&#37;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
