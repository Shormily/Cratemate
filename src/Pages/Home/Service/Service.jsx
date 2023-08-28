import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import Servone from "../Servone/Servone";
import Tabletab from "../Tabletab/Tabletab";
import BigData from "../BigData/BigData";
import Tab from "../Tab/Tab";
import Contact from './../Contact/Contact';
import DoNavbar from "../DoNavbar/DoNavbar";



const About = () => {
  return (
    <>
      <Navbar />
      <Servone/>
      <DoNavbar/>
      <BigData/> 
      <Tab/>
      <Tabletab/>
      <Card/>
      <Contact/>
     
    </>
  );
};

export default About;
