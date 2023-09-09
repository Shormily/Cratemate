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
      pra: " Data for the AI Lifecycle is our specialty and we choose to partner with the industry experts in cloud computing when it comes to model training and deployment. Our partners are leading technology and services companies you can leverage to build end-to-end AI solutions. Whether it’s your in-house team of engineers and data scientists, or you choose to work with our strategic technology partners, we provide your team with the data to train and deploy AI models.",
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
        textColor="#1d4ed8"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="basic tabs example"
        TabIndicatorProps={{style: {
          backgroundColor: "#1d4ed8",
          height: "3px",
          // fontWeight:900,
          border: "1px solid #1d4ed8",
          // borderTopLeftRadius: "10px",
          // borderTopRightRadius: "10px"
        }, className: "hidden  sm:block " }}
        classes={{
          flexContainer: "flex-wrap sm:flex-nowrap",
        }}
      >
        <Tab
          sx={{
            color: "#1d4ed8",
            fontSize: 12,
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 900,
          }}
          label=" Classification"
          {...a11yProps(0)}
        />
       
      
      </Tabs>
    </Box>
    {Tabse.map((tab) => (
      <>
        <TabPanel value={value} index={tab.id}>
          <div className="">
            <div className="w-full rounded-md  lg:pr-5 px-5 ">
              <div className="block text-justify font-medium mt-5 mb-2  text-slate-950 text-[15px]  pr-5  ">
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
