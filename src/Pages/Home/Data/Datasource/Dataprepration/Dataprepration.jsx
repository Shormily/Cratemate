import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import "./Tabletab.css";
import "animate.css";

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
      name: "Secoure Data Access",
      img: "https://i.ibb.co/QnvVnBN/WWD-Secure-Data-Access-png.png",
      pra: " Classify and categorize any kind of data at scale using our platform. Moderate and sort high volumes of content with precision.",
    },
    {
      id: 1,
      name: "Secure Crowd",
      img: "https://i.ibb.co/ypfzXLv/WWD-Secure-Crowd-png.png",
      pra: " Annotate images, text, videos, point clouds, and audio with state-of-the-art technology. Text-labeling tools like NER and speech labeling are also supported.",
    },
    {
      id: 2,
      name: "Secure Facilities",
      img: "https://i.ibb.co/mzrqM7v/WWD-Secure-Facilities-png.png",
      pra: "  Transcribe documents, images of documents, or website information. Our audio transcription services cater to scaling your natural language processing (NLP) and audio speech recognition (ASR) programs. Built-in NLP models improve transcription quality and efficiency, and transcribe spoken audio into text or validate machine-generated transcriptions.",
    },
    {
      id: 3,
      name: "Secure Workspace",
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  Translate large volumes of data to reliably train AI and ML models with access to specialized linguistic experts.",
    },
   
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="  m-auto " sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", color: "#003B49" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="#003B49"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
          TabIndicatorProps={{style: {
            backgroundColor: "#004d40",
            height: "3px",
            // fontWeight:900,
            border: "1px solid #000",
            // borderTopLeftRadius: "10px",
            // borderTopRightRadius: "10px"
          }, className: "hidden  sm:block " }}
          classes={{
            flexContainer: "flex-wrap sm:flex-nowrap",
          }}
        >
          <Tab
            sx={{
              color: "#003B49",
              fontSize: 12,
              fontFamily: "'Didact Gothic', sans-serif;",
              fontWeight: 700,
            }}
            label=" Classification"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#003B49",
              fontSize: 12,
              fontFamily: "'Didact Gothic', sans-serif;",
              fontWeight: 700,
            }}
            label="Annotation"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "#003B49",
              fontSize: 12,
              fontFamily: "'Didact Gothic', sans-serif;",
              fontWeight: 700,
            }}
            label="Transcription"
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              color: "#003B49",
              fontSize: 12,
              fontFamily: "'Didact Gothic', sans-serif;",
              fontWeight: 700,
            }}
            label="
            
Translation"
            {...a11yProps(3)}
          />
        
        </Tabs>
      </Box>
      {Tabse.map((tab) => (
        <>
          <TabPanel value={value} index={tab.id}>
            <div className="">
              <div className="w-full rounded-md  lg:pr-5 px-5 ">
                <div className="block  font-semibold mt-5 mb-2  text-gray-900  pr-5 cont-pra ">
                  {tab.pra}
                </div>
              </div>
            </div>
          </TabPanel>
        </>
      ))}
    </Box>
  );
}
