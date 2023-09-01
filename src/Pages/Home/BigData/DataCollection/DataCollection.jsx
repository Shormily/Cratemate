
const Relevence = () => {
    const services = [
      {
        name: "Computer Vision & Pattern Recognition",
        img: "https://i.ibb.co/Hqh8DqR/RGB-White-Video-Annotation-png.png",
        description:
          "Access tailored datasets to ensure your model responds accurately in real-world scenarios.",
      },
      {
        name: "Speech Data Collection",
        img: "https://i.ibb.co/5h4z9vj/RGB-White-Translate-png.png",
        description:
          "Annotate speech data in over 235 languages and dialects for robust NLP and automatic speech recognition solutions.",
      },
      
      {
          name: "Automatic Speech Recognition",
          img: "https://i.ibb.co/VHssV4R/RGB-White-Scale-Large-png.png",
          description:
            "Access high-quality language data to enable models to understand and respond to human speech across languages, dialects, and environments.",
        },
        {
          name: "Text Data Collection",
          img: "https://i.ibb.co/q72S2V5/RGB-White-Managed-Services-png.png",
          description:
            "Multilingual text data collection in major languages and dialects.",
        },
      {
        name: "Sentiment Analysis, Chatbots, & More",
        img: "https://i.ibb.co/d26SLWB/RGB-White-Hand-World-png.png",
        description:
          "Collect domain-specific text data to build robust NLP systems and expand into new markets.",
      },
      {
        name: "Image & Video Collection: ",
        img: "https://i.ibb.co/d5Ky2RC/RGB-White-Shop-png.png",
        description:
          "Gather diverse images and videos for model training.",
      },
      {
        name: "Speech & NLP Collection",
        img: "https://i.ibb.co/YXdtxSm/006-database.png",
        description:
          "Collect audio clips in multiple languages and dialects.",
      },
     
        {
          name: "3D Sensor Collection",
          img: "https://i.ibb.co/y8V6w7k/015-big-data.png",
          description:
            "Utilize light image sensors to capture object distances.",
        },
       
        {
          name: "Multi-Modal Collection",
          img: "https://i.ibb.co/ZxMzYkC/diseno-web.png",
          description:
            "Gather data from various sources: text, image, audio, speech, LiDAR, and POI.",
        },
       
        
        {
          name: "POI Collection",
          img: "https://i.ibb.co/W2cDc1f/rebobinar-1.png",
          description:
            "Collect location-specific data.",
        },
        {
          name: "Data Collection Locations",
          img: "https://i.ibb.co/8cZQz2H/031-big-data.png",
          description:
            "Collect data in various environments using internal tools or provided ones, such as studio, home, office, in-car, and public spaces.",
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
         <img className=" w-12 imgs h-12" src={service.img} alt="" /><span className="pt-2 text-[18px]">{service.name}</span> 
          </p>
          <p className="text-style text-white font-normal text-[14px] ">

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