import React from 'react';
import Navbar from '../../components/FirstPage/navbar/navbar';
import Carousel from '../../components/FirstPage/carousel/_component/carousel';
import Latest from '../../components/FirstPage/latest/components/latest';
import Fotter from '../../components/FirstPage/Fotter/_component/_fotter';
import AboutSuc from '../../components/FirstPage/about/_component/aboutSuc';
function Home() {
  return (
    <div style={{backgroundColor:"#000"}}>
    <Navbar/>
    <Carousel/>
    <AboutSuc />
    <Latest />
    <Fotter/>
    </div>
  );
}
export default Home;