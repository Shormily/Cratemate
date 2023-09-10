
const Relevence = () => {
    const services = [
    
        {
            name: "Project Structure",
            img: "https://i.ibb.co/xgXs9FR/lista-de-verificacion.png",
            description:
              "Develop a well-organized and purposeful foundation for your project, along with a tailored quality plan designed to provide the right type of data.",
          },
     
      
      {
        name: "Scripting Expertise",
        img: "https://i.ibb.co/pv5DTWg/019-brain-2.png",
        description:
          "Offer tooling and scripting expertise to enhance quality and reduce project timelines.",
      },
      {
        name: "Communication",
        img: "https://i.ibb.co/JQHs6VL/lista-de-verificacion-1.png",
        description:
          "Engage in meticulous communication to comprehend and convey your distinct objectives accurately.",
      },
      {
        name: "Project Challenges",
        img: "https://i.ibb.co/gFjSZTt/engranaje.png",
        description:
          "Predict, diagnose, and overcome potential challenges that may arise during the project.",
      },
      {
        name: "Project Management",
        img: "https://i.ibb.co/dKxqMT0/025-artificial-intelligence.png",
        description:
          "Undertake day-to-day project management and personnel-related responsibilities.",
      },
      {
        name: "Quality Assurance",
        img: "https://i.ibb.co/KLX9hFV/nombramiento.png",
        description:
          "Evaluate translation quality to pinpoint areas that require enhancement, thereby elevating the overall standard of translations.",
      },
      {
        name: "Translation Memory",
        img: "https://i.ibb.co/RG8KnxR/feliz.png",
        description:
          "Create a database repository of previously translated segments to assist human translators in maintaining consistency.",
      },
      {
        name: "Terminology & Glossary Management",
        img: "https://i.ibb.co/NLw1zcm/si.png",
        description:
          "Handle and optimize natural language ambiguities and vernacular to ensure uniform translations.",
      },
      {
        name: "Tag Prediction & Automated Consistency Checks",
        img: "https://i.ibb.co/zHXvrDX/charlar.png",
        description:
          "Tag Prediction & Automated Consistency Checks",
      },
     
     
       
     
        
      ];
    return (
        <>
         <div className="card mb-12 ">
         <div className="boxs grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <>
           
           
          <div className="content   ">  
          <p className="flex gap-4 mb-4 pt-12  ">
         <img className=" w-12 imgs h-justify" src={service.img} alt="" /><span className="pt-2 text-[15px]">{service.name}</span> 
          </p>
          <p className="text-style text-white font-normal text-[15px] text-justify">

              {service.description}
            </p>
          </div>
       
      </>
        ))}
         </div>
      </div>  
        </>
    );
};

export default Relevence;