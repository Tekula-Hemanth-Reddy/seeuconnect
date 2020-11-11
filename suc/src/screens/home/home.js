import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Carousel from '../../components/carousel/_component/carousel';
import Latest from '../../components/latest/components/latest';
import Fotter from '../../components/Fotter/_component/_fotter';
import AboutSuc from '../../components/about/_component/aboutSuc';
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