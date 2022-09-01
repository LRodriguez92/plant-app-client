import Weather from "../components/Weather";
import Schedule from "../components/Schedule";
import { IonContent } from "@ionic/react";

const Home: React.FC = () => {
  return (
    <IonContent style={{ "--background": "transparent" }}>
      <div className="h-full flex flex-col justify-between mt-10">
        <Weather />
        <Schedule />
      </div>
    </IonContent>
  );
};

export default Home;
