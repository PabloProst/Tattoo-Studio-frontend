import {React} from 'react';
import "./Home.css";
import { Banner } from '../../common/BannerHome/BannerHome';
import { AboutUs } from '../../common/AboutUs/AboutUs';
import { Information } from '../../common/Information/Information';
import { TattooStyles } from '../../common/TattooStyles/TattooStyles';
import { StaticNavbar } from '../../common/StaticNavbar/StaticNavbar';

export const Home = () => {
  return (
    <div>
      <div><Banner/></div>
      <div><AboutUs/></div>
      <div><TattooStyles/></div>
      <div><Information/></div>
    </div>
  );
}
