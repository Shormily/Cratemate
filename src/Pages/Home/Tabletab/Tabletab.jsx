import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Tabletab.css";
import 'animate.css';

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
      pra: " Data security requirements are met for customers working with personally identifiable information (PII), protected    health information (PHI), and other sophisticated compliance needs.",
    },
    {
      id: 1,
      name: "Secure Crowd",
      img: "https://i.ibb.co/ypfzXLv/WWD-Secure-Crowd-png.png",
      pra: "  We offer a range of flexible options to ensure data protection via secure facilities, secure remote workers, and onsite services to meet your specific business­ needs.",
    },
    {
      id: 2,
      name: "Secure Facilities",
      img: "https://i.ibb.co/mzrqM7v/WWD-Secure-Facilities-png.png",
      pra: "  We have sites in multiple geographies to support projects with Personally Identifiable Information (PII) and other sensitive data. We also have the right people, policies, and processes in place for a range of security levels, up to government level certification.",
    },
    {
      id: 3,
      name: "Secure Workspace",
      img: "https://i.ibb.co/fkw8X8h/WWD-Secure-Workspace-png.png",
      pra: "  With our ISO 27001 accredited remote Secure Workspace solution, our global crowd can work on your sensitive projects remotely, without having to access a physical secure facility. This allows the diversity of our remote crowd to reduce bias and support multiple languages even through global disruptions.",
    },
    {
      id: 4,
      name: "Certifications",
      img: "https://i.ibb.co/zVQJKSR/WWD-Secure-Certifications-png.png",
      pra: "   We’re data privacy and security compliant, holding all major accreditations and certifications.",
    },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="tabtable" >
 <Box className="max-w-[1200px]  m-auto " sx={{ width: "100%" }}>
      <h1 className=" text-gray-600 text-4xl  service-heading    mx-3 ">
        Secure Data
      </h1>
      <p className="font-normal mt-4 mb-3 text-style text-gray-600 mx-3">
        Enhance data security with enterprise-level protection for sensitive
        client information.
      </p>
      <Box sx={{ borderBottom: 1, borderColor: "divider",color: "#003B49", }}>
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
          }, className: "hidden  sm:block " } }
          classes={{
            flexContainer: "flex-wrap sm:flex-nowrap",
          }}
         
        >
          <Tab
           sx={{ color:"#003B49",fontSize:12,fontFamily:"'Roboto', sans-serif",fontWeight:900 }}
            label="Secoure Data Access"
            {...a11yProps(0)}
          />
          <Tab
             sx={{ color:"#003B49",fontSize:12,fontFamily:"'Roboto', sans-serif",fontWeight:900 }}
            label="Secure Crowd"
            {...a11yProps(1)}
          />
          <Tab
             sx={{ color:"#003B49",fontSize:12,fontFamily:"'Roboto', sans-serif",fontWeight:900 }}
            label="Secure Facilities"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ color:"#003B49",fontSize:12,fontFamily:"'Roboto', sans-serif",fontWeight:900 }}
            label="Secure Workspace "
            {...a11yProps(3)}
          />
          <Tab
             sx={{ color:"#003B49",fontSize:12,fontFamily:"'Roboto', sans-serif",fontWeight:900 }}
            label="Certifications"
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
      {Tabse.map((tab) => (
        <>
          <TabPanel value={value} index={tab.id}>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <div className="animate__animated animate__zoomIn">
                <img className="rounded-md  " src={tab.img} alt="" />
              </div>
              <div className="w-full rounded-md  lg:pr-5 px-5 ">
                <h3 className="text-gray-950 text-3xl cont-pra  pt-12">
                  {tab.name}
                </h3>
                <div className="block  font-normal text-[15px] mt-5 mb-2  text-gray-900  pr-5 cont-pra ">
                  {tab.pra}
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
