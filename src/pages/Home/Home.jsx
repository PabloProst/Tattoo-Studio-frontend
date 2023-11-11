import {React} from 'react';
import "./Home.css";
import { Header } from "../../common/Header/Header";
import { Banner } from '../../common/BannerHome/BannerHome';
import { AboutUs } from '../../common/AboutUs/AboutUs';
import { Information } from '../../common/Information/Information';

export const Home = () => {
  return (
    <div>
      <div><Header/></div>
      <div><Banner/></div>
      <div><AboutUs/></div>
      <div><Information/></div>
    </div>
  );
}
