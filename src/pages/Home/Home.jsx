import {React} from 'react';
import "./Home.css";
import { Banner } from '../../common/BannerHome/BannerHome';
import { Information } from '../../common/Information/Information';

export const Home = () => {
  return (
    <div>
      <div><Banner/></div>
      <div><Information/></div>
    </div>
  );
}
