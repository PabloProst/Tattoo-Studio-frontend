// import React from 'react';
// import './BannerHome.css';

// export const Banner = () => {
//   return (
//     <div className="bannerHeader">
//       <div className="background-banner" style={{ backgroundImage: `url('../src/assets/img/bannerPh.jpg')` }}><img src='../src/assets/img/logoPage.png' alt='logoPage' /></div>
//       {/* <div className='textBanner'>DYNAMIC <span className='blueColour'>INK</span></div> */}
//       {/* <div className='textBanner-second'>INK YOUR STORY</div> */}
//     </div>
//   );
// };

import React from 'react';
import './BannerHome.css';

export const Banner = () => {
  return (
    <div className="bannerHeader">
      <div className="background-banner" style={{ backgroundImage: `url('../src/assets/img/bannerPh.jpg')` }}>
        <div className="logo-container">
          <img className='logoPage' src='../src/assets/img/logoPage.png' alt='logoPage' />
        </div>
      </div>
    </div>
  );
};
