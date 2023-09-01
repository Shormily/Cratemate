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
      pra: " High-quality evaluators that cover hundreds of regions to test and benchmark how AI products work in target markets.",
    },
    {
      id: 1,
      name: "Secure Crowd",
      img: "https://i.ibb.co/ypfzXLv/WWD-Secure-Crowd-png.png",
      pra: "  Ensure models account for language, dialects, and cultural nuances.",
    },
    {
      id: 2,
      name: "Secure Facilities",
      img: "https://i.ibb.co/mzrqM7v/WWD-Secure-Facilities-png.png",
      pra: "  Test AI models in situations that reflect real-world usage with unique use cases and niche conditions.",
    },
    {
      id: 3,
      name: "Secure Workspace",
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  Leverage partnerships with top global technology companies to standardize and iterate the voice evaluation process.",
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
              fontFamily: "'Roboto', sans-serif;",
              fontWeight: 900,
            }}
            label=" Global and Local"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              color: "#003B49",
              fontSize: 12,
              fontFamily: "'Roboto', sans-serif;",
              fontWeight: 900,
            }}
            label="
            Edge Case Testing"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              color: "#003B49",
              fontSize: 12,
              fontFamily: "'Roboto', sans-serif;",
              fontWeight: 900,
            }}
            label="
            Real-World Simulation"
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              color: "#003B49",
              fontSize: 12,
              fontFamily: "'Roboto', sans-serif;",
              fontWeight: 900,
            }}
            label="
           
Benchmarking"
            {...a11yProps(3)}
          />
       
        </Tabs>
      </Box>
      {Tabse.map((tab) => (
        <>
          <TabPanel value={value} index={tab.id}>
            <div className="">
              <div className="w-full rounded-md  lg:pr-5 px-5 ">
                <div className="block  font-normal mt-5 mb-2  text-slate-950  text-[15px] pr-5 cont-pra ">
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
