import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataSource from "../Data/Datasource/DataSource";
import Dataprepration from "../Data/Datasource/Dataprepration/Dataprepration";
import Development from "../Data/Datasource/Development/Development";
import Evulation from "../Data/Datasource/Evulation/Evulation";
import "./Tab.css";
import 'animate.css';

// import { TabContext } from '@material-ui/lab/TabContext';

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
      folder:<DataSource/>,
      name: "Secoure Data Access",
      img: "https://i.ibb.co/JQns6wT/WWD-Data-Lifecycle-Data-Sourcing-png.png",
    },
    {
      id: 1,
      folder:<Dataprepration/>,
      name: "Secure Crowd",
      img: "https://i.ibb.co/MPyxwDc/WWD-Data-Lifecycle-Data-Preparation-png.png",
    },
    {
      id: 2,
      folder:<Development/>,
      name: "Secure Facilities",
      img: "https://i.ibb.co/gZxkBNt/WWD-Data-Lifecycle-Partners-png.png",
    },
    {
      id: 3,
      folder:<Evulation/>,
      name: "Secure Workspace",
      img: "https://i.ibb.co/xLVVWnR/WWD-Data-Lifecycle-Human-In-The-Loop-png.png",
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="tab">
    <Box className="max-w-[1500px] m-auto  mb-24" sx={{ width: "100%" }}>
      <h1 className=" pt-12 mt-4 text-gray-950 text-4xl  font-bold    mx-3 ">
      Quality AI training data for the AI lifecycle
      </h1>
      <p className="font-medium mt-4 mb-3 text-style text-gray-800 mx-3">
      A complete solution for AI training data sourcing, preparation, and model evaluation.
      </p>
      <Box sx={{ borderBottom: 1, borderColor: "divider",color: "#003B49", }}>
        
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="#1d4ed8"
          indicatorColor="#1d4ed8" 
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: {
            backgroundColor: "#1d4ed8",
            height: "3px",
            // fontWeight:900,
            border: "1px solid #1d4ed8",
            // borderTopLeftRadius: "10px",
            // borderTopRightRadius: "10px"
          }, className: "hidden  sm:block " } }
          classes={{
            flexContainer: "flex-wrap sm:flex-nowrap",
          }}
         
        >
          <Tab
           sx={{ color:"#1d4ed8",fontSize:12,fontFamily:"'Raleway', sans-serif",fontWeight:900 }}
            label="Data Sourcing"
            {...a11yProps(0)}
           
          />
          <Tab
            sx={{ color:"#1d4ed8",fontSize:12,fontFamily:"'Raleway', sans-serif",fontWeight:900 }}
            label="
            Data Preparation"
            {...a11yProps(1)}
          />
          <Tab
             sx={{ color:"#1d4ed8",fontSize:12,fontFamily:"'Raleway', sans-serif",fontWeight:900 }}
            label="
            Model Development Partners"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ color:"#1d4ed8",fontSize:12,fontFamily:"'Raleway', sans-serif",fontWeight:900 }}
            label="
            Human-in-the-Loop Model Evaluation "
            {...a11yProps(3)}
          />
        
        </Tabs>
      </Box>
      {Tabse.map((tab) => (
        <>
          <TabPanel value={value} index={tab.id}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <div className="animate__animated animate__zoomIn">
                <img className="rounded-md imges" src={tab.img} alt="" />
              </div>
              <div className="w-full rounded-md  lg:pr-5 px-5 animate__animated animate__zoomIn">
                <div className="block  font-semibold mt-5 mb-2 text-justify text-gray-900  pr-5  ">
                {tab.folder}
                </div>
              </div>
            </div>
          </TabPanel>
        </>
      ))}
    </Box>
    </div>
    
  );
}
