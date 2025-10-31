import { FC } from "react";
import Welcome from "./home/welcome/Welcome";
import Subscription from "./home/subscription/Subscription";

const HomePage: FC = () => {
  return (
    <>
      <Welcome />
      <Subscription />
    </>
  );
};

export default HomePage;
