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
      pra: " Cratemate-Ai provides Data Collection services across a variety of data types (speech, text, image, video, mixed) for a range of environments (studio, home, office, in-car, public spaces) from our global crowd of more than 1 million contributors, we provide access to ethically sourced datasets for any use case you may have and is done through our end-to-end managed services. We also offer data sourcing solutions for all organizations, no matter which stage of AI maturity.",
    },
    {
      id: 1,
      name: "Secure Crowd",
      img: "https://i.ibb.co/ypfzXLv/WWD-Secure-Crowd-png.png",
      pra: " Boost your data collection capabilities for machine learning, pattern recognition, and computer vision solutions. Focusing on detailed specifications, we ensure true data collection diversity for your platform, covering participant demographics, background visuals, environmental factors, and more. A unique point of difference, we built our own image and video data collection mobile app for iOS and Android, and we’ve developed an online platform for quality assurance and annotation. These proprietary tools help us more rapidly scale data collection for multiple collections with truly global coverage.",
    },
    {
      id: 2,
      name: "Secure Facilities",
      img: "https://i.ibb.co/mzrqM7v/WWD-Secure-Facilities-png.png",
      pra: "  Accelerate your AI project with access to our catalog of more than 250+ off the shelf instruction datasets made specific to your needs.",
    },
    {
      id: 3,
      name: "Secure Workspace",
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  Leverage our proprietary Point-of-Interest (POI) data collection and verification platform to obtain bespoke, accurate, and complete POI datasets. Geolancer is the only platform that can build POI on-demand datasets with any custom attribute, tailored to your specific business requirements. Our global network of more than a million contributors covers 170+ countries and can be leveraged with Geolancer to collect POI data at any scale.",
    },
    {
      id: 4,
      name: "Certifications",
      img: "https://i.ibb.co/zVQJKSR/WWD-Secure-Certifications-png.png",
      pra: "   Augment training data with synthetic data to fill out all potential use and edge cases, save money on data collection, or accommodate privacy requirements.",
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
            label=" Data Collection"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#1d4ed8",
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 900,
            }}
            label="Image Collection"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "#1d4ed8",
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 900,
            }}
            label="Off-the-Shelf Datasets"
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              color: "#1d4ed8",
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 900,
            }}
            label="
            Point of Interest"
            {...a11yProps(3)}
          />
          <Tab
            sx={{
              color: "#1d4ed8",
              fontSize: 12,
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 900,
            }}
            label="Synthetic Data"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      {Tabse.map((tab) => (
        <>
          <TabPanel value={value} index={tab.id}>
            <div className="">
              <div className="w-full rounded-md  lg:pr-5 px-5 ">
                <div className="block text-[14px]  font-medium mt-5 mb-2  text-slate-950 [15px] pr-5 ">
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
