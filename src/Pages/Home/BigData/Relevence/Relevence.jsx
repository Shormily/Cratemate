import "./Relevence.css"


const Relevence = () => {
    const services = [
      {
        name: "Related Search Content Moderation ",
        img: "https://i.ibb.co/XtTFRN4/RGB-White-Search-png.png",
        description:
          "We identify auto-fill and auto-correct suggestions while eliminating irrelevant or junk content from the mix.",
      },
      {
        name: "Geo-Local Evaluation ",
        img: "https://i.ibb.co/m85Kdsq/RGB-White-Structure-png.png",
        description:
          "Our focus is on ensuring that the most up-to-date local results are prominently displayed in maps and navigation searches.",
      },
      {
        name: "Map Verification ",
        img: "https://i.ibb.co/5LnPgbx/RGB-White-Personalization-png.png",
        description:
          "We ensure the accuracy, safety, and efficiency of point-to-point navigation, enhancing user experience.",
      },
      {
        name: "News Feed Content Moderation ",
        img: "https://i.ibb.co/vZPFpv3/RGB-White-Paper-Transcribe-png.png",
        description:
          "We meticulously evaluate newsfeed and social media content to ensure credibility and reliability.",
      },
      {
        name: "Cataloging - Data Types ",
        img: "https://i.ibb.co/8bHNMgk/RGB-White-Cog-Check-png.png",
        description:
          "Our support extends across all data formats, including images, videos, audio, text, and multimedia content.",
      },
      
      {
          name: "Whole Page Evaluation ",
          img: "https://i.ibb.co/qnT2pz1/ethical-png-removebg-preview.png",
          description:
            "We gauge how effectively your web page performs and provide actionable insights to drive your progress toward your business objectives.",
        },
        {
          name: "Side-by-Side Evaluation ",
          img: "https://i.ibb.co/7jdPN9L/Scale-2x-png-removebg-preview.png",
          description:
            "Confidently deploy model updates after a thorough blind test validates the delivery of superior results. This approach optimizes performance for resounding success.",
        },
        {
          name: "Data Preparation ",
          img: "https://i.ibb.co/pv5DTWg/019-brain-2.png",
          description:
            "Our expertise extends to annotating all types of data – be it images, videos, audio, text, 3D sensor data, or multi-modal content. We ensure that your desired outcomes are achieved accurately from the very start.",
        },
       
        {
          name: " Ads Evaluation ",
          img: "https://i.ibb.co/Wx7KJHS/024-digital.png",
          description:
            "Our focus is on ensuring that your content and landing pages align with queries, context, culture, and the needs of your target audience. This meticulous alignment guarantees the delivery of high-quality results.",
        },
       
        
        {
          name: "Data Sourcing ",
          img: "https://i.ibb.co/88H5tBh/Evaluation-Annotation.png",
          description:
            "We possess the capability to acquire substantial volumes of high-quality data, offering pre-labeled datasets for a swift start. Alternatively, we can provide new, impartial, globally representative, and specific data tailored to your content relevance application.",
        },
        {
          name: "Cataloging - Taxonomy Development ",
          img: "https://i.ibb.co/3Ns4yRR/RGB-White-Monitor-Graphs-png.png",
          description:
            "We ensure seamless alignment between your customers' search terms and your content tags, thereby enhancing content recommendations.",
        },
        {
          name: "Cataloging - Categorization ",
          img: "https://i.ibb.co/fv0jQCd/RGB-White-Search-Relevance-png.png",
          description:
            "Our focus is on grouping similar offerings and presenting them simultaneously, improving user experience. This approach applies to various content types such as songs or video content.",
        },
        
       
       
        {
          name: "Model Evaluation ",
          img: "https://i.ibb.co/X7YzjwJ/038-big-data.png",
          description:
            "We conduct user tests and benchmark performance against competitors, identifying potential performance gaps. Our meticulous evaluation also involves preparing the necessary data to optimize performance.",
        },
        {
          name: "Entity Evaluation & Correction ",
          img: "https://i.ibb.co/wB9Fhrd/RGB-White-Alert-png.png",
          description:
            "We guarantee the accuracy of crucial business information such as websites, operating hours, and contact details. Feel free to replace icon_data_sourcing.png, icon data preparation.png, etc., with the actual file names of the icon images you intend to use.",
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
             <img className=" w-12 imgs  h-justify" src={service.img} alt="" /><span className="pt-2 text-[15px]">{service.name}</span> 
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