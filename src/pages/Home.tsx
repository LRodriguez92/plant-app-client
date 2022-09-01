import Weather from "../components/Weather";
import Schedule from "../components/Schedule";

const Home: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-between mt-10">
      <Weather />
      <Schedule />
    </div>
  );
};

export default Home;
