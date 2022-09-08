import { PlusIcon } from "@heroicons/react/24/solid";
import { MdNorth } from "react-icons/md";
import {
  GiCarnivorousPlant,
  GiPlantRoots,
  GiPlantSeed,
  GiPlantWatering,
  GiPlantsAndAnimals,
} from "react-icons/gi";
import { RiPlantFill, RiPlantLine } from "react-icons/ri";
import { TbPlantOff, TbPlant2Off } from "react-icons/tb";

const plantIcons: React.ReactElement[] = [
  <GiCarnivorousPlant className="w-28 h-28 text-gray-600" />,
  <GiPlantRoots className="w-28 h-28 text-gray-600" />,
  <GiPlantSeed className="w-28 h-28 text-gray-600" />,
  <GiPlantWatering className="w-28 h-28 text-gray-600" />,
  <GiPlantsAndAnimals className="w-28 h-28 text-gray-600" />,
  <RiPlantFill className="w-28 h-28 text-gray-600" />,
  <RiPlantLine className="w-28 h-28 text-gray-600" />,
  <TbPlantOff className="w-28 h-28 text-gray-600" />,
  <TbPlant2Off className="w-28 h-28 text-gray-600" />,
];

const Schedule: React.FC = () => {
  return (
    <div id="schedule" className=" h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-3xl mx-auto flex justify-between mb-6">
          <p className="text-2xl">Schedule</p>
          <div>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-emerald-600 bg-white hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <PlusIcon
                className="-ml-0.5 mr-2 h-4 w-4 text-emerald-600"
                aria-hidden="true"
              />
              Add Plant
            </button>
            <MdNorth className="absolute text-emerald-600 mt-2 w-16 h-16 animate-bounce" />
          </div>
        </div>
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center bg-white/70 rounded h-80">
          <div className="flex justify-center items-center my-6">
            {plantIcons[Math.floor(Math.random() * plantIcons.length)]}
          </div>
          <p className="text-center text-emerald-900 font-bold">
            You don't have any plants yet! <br />
            Add your plants now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
