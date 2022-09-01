import { PlusIcon } from "@heroicons/react/24/solid";

const Schedule: React.FC = () => {
  return (
    <div id="schedule" className=" h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-3xl mx-auto flex justify-between mb-6">
          <p className="text-2xl">Schedule</p>
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
        </div>
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center bg-white/70 rounded h-60">
          <div className="h-24 w-24 bg-slate-700 my-8">
            {/* TODO: Add image here */}
          </div>
          <p className="text-center text-emerald-900 font-bold">
            You don't have any plants yet <br />
            Add your plants now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
