import {React} from 'react';
import "./Home.css";
import { Header } from "../../common/Header/Header";
import { Banner } from '../../common/BannerHome/BannerHome';

export const Home = () => {
  return (
    <div>
      <div><Header/></div>
      <div><Banner/></div>
    </div>
  );
}
