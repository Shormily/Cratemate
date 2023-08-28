import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./BigData.css";
import "animate.css";
import Relevence from "./Relevence/Relevence";
import Content from "./Content/Content";
import DataCollection from "./DataCollection/DataCollection";
import Computervr from "./Computervr/Computervr";
import NPL from "./NPL/NPL";
import Chatbot from "./Chatbot/Chatbot";
import AR from "./AR/AR";
import Audio from "./Audio/Audio";
import Linux from "./Linux/Linux";




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function AboutTabs() {
  const Tabse = [
    {
      id: 0,
      name: <Relevence/>,
      img: "https://i.ibb.co/QnvVnBN/WWD-Secure-Data-Access-png.png",
      pra: " Classify and categorize any kind of data at scale using our platform. Moderate and sort high volumes of content with precision.",
    },
    {
      id: 1,
      name: <Content/> ,
      img: "https://i.ibb.co/ypfzXLv/WWD-Secure-Crowd-png.png",
      pra: " Annotate images, text, videos, point clouds, and audio with state-of-the-art technology. Text-labeling tools like NER and speech labeling are also supported.",
    },
    {
      id: 2,
      name: <DataCollection/>,
      img: "https://i.ibb.co/mzrqM7v/WWD-Secure-Facilities-png.png",
      pra: "  Transcribe documents, images of documents, or website information. Our audio transcription services cater to scaling your natural language processing (NLP) and audio speech recognition (ASR) programs. Built-in NLP models improve transcription quality and efficiency, and transcribe spoken audio into text or validate machine-generated transcriptions.",
    },
    {
      id: 3,
      name:<Computervr/>  ,
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  Translate large volumes of data to reliably train AI and ML models with access to specialized linguistic experts.",
    },
    {
      id: 4,
      name:<NPL/>  ,
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  Translate large volumes of data to reliably train AI and ML models with access to specialized linguistic experts.",
    },
    {
      id: 5,
      name:<Chatbot/>  ,
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  Translate large volumes of data to reliably train AI and ML models with access to specialized linguistic experts.",
    },
    {
      id: 6,
      name:<AR/>  ,
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  Translate large volumes of data to reliably train AI and ML models with access to specialized linguistic experts.",
    },
    {
      id: 7,
      name:<Audio/>  ,
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  Translate large volumes of data to reliably train AI and ML models with access to specialized linguistic experts.",
    },
    {
      id: 8,
      name:<Linux/>  ,
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  Translate large volumes of data to reliably train AI and ML models with access to specialized linguistic experts.",
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    
   <div className="max-w-[1340px] m-auto pb-6 pt-5" id="Data">
    <h1 className=" pt-8 text-gray-600 text-4xl   text-styles  mx-3 ">
    Empowering AI Models: From Inception to Mastery
      </h1>
      <p className="cont-pra mt-4 mb-3 text-gray-500 mx-3">
      Harnessing the power of AI and machine learning, our models are fortified with top-notch training data and expertly managed services.
      </p></div>
    
     <div className="max-w-[1340px] m-auto Bigdata-background" id="hero" >
    <Box className="max-w-[1310px]  m-auto " sx={{ width: "100%" }}>
         <Box sx={{ borderBottom: 1, borderColor: "divider", color: "#fff", }}>
           <Tabs
             value={value}
             onChange={handleChange}
             textColor="#003B49"
             indicatorColor="primary"
             variant="scrollable"
             scrollButtons="auto"
             aria-label="basic tabs example"
            
             TabIndicatorProps={{
               style: {
                 backgroundColor: "#fff",
                 height: "3px",
                 fontWeight:"bold",
                 border: "1px solid #fff",
                 // borderTopLeftRadius: "10px",
                 // borderTopRightRadius: "10px"
               },
               className: "hidden  sm:block ",
             }}
             classes={{
               flexContainer: "flex-wrap sm:flex-nowrap",
             }}
           >
             <Tab
               sx={{
                 color: "#fff",
                 fontSize: 15,
                 textTransform :"none",
                 fontFamily: "'Didact Gothic', sans-serif;",
                 fontWeight: "bold",
               }}
               label="Search Relevance"
               {...a11yProps(0)}
             />
             <Tab
               sx={{
                 color: "#fff",
                 fontSize: 15,
                 textTransform :"none",
                 fontFamily: "'Didact Gothic', sans-serif;",
                 fontWeight: "bold",
               }}
               label="
               Content Relevance"
               {...a11yProps(1)}
             />
             <Tab
               sx={{
                 color: "#fff",
                 fontSize: 15,
                 textTransform :"none",
                 fontFamily: "'Didact Gothic', sans-serif;",
                 fontWeight: "bold",
              
               }}
             
               label="
               Data Collection"
               {...a11yProps(2)}
             />
             <Tab
               sx={{
                 color: "#fff",
                 fontSize: 15,
                 textTransform :"none",
                 fontFamily: "'Didact Gothic', sans-serif;",
                 fontWeight: "bold",
               }}
               label="Computer Vision"
               {...a11yProps(3)}
             />
             <Tab
               sx={{
                 color: "#fff",
                 fontSize: 15,
                 textTransform :"none",
                 fontFamily: "'Didact Gothic', sans-serif;",
                 fontWeight: "bold",
               }}
               label="NLP & Speech"
               {...a11yProps(4)}
             />
             <Tab
               sx={{
                 color: "#fff",
                 fontSize: 15,
                 textTransform :"none",
                 fontFamily: "'Didact Gothic', sans-serif;",
                 fontWeight: "bold",
               }}
               label="Chatbots & Conversational AI"
               {...a11yProps(5)}
             />
             <Tab
               sx={{
                 color: "#fff",
                 fontSize: 15,
                 textTransform :"none",
                 fontFamily: "'Didact Gothic', sans-serif;",
                 fontWeight: "bold",
               }}
               label="AR/VR"
               {...a11yProps(6)}
             />
             <Tab
               sx={{
                 color: "#fff",
                 fontSize: 15,
                 textTransform :"none",
                 fontFamily: "'Didact Gothic', sans-serif;",
                 fontWeight: "bold",
               }}
               label="
               Audio"
               {...a11yProps(7)}
             />
             <Tab
               sx={{
                 color: "#fff",
                 fontSize: 15,
                 textTransform :"none",
                 fontFamily: "'Didact Gothic', sans-serif;",
                 fontWeight: "bold",
               }}
               label="
               Linguistics"
               {...a11yProps(8)}
             />
           </Tabs>
         </Box>
         {Tabse.map((tab) => (
           <>
             <TabPanel value={value} index={tab.id}>
               <div className="">
                 <div className="w-full rounded-md  lg:pr-5 px-5 ">
                   <div className="block  font-semibold mt-5 mb-2  text-gray-900  pr-5 cont-pra ">
                     {tab.name}
                   </div>
                 </div>
               </div>
             </TabPanel>
           </>
         ))}
       </Box>
       </div></>
   
    
  );
}
