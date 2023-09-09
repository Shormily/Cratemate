
const Relevence = () => {
    const services = [
        {
            name: "Text Classification (Sentiment, Intent)",
            img: "https://i.ibb.co/ySvJK2z/desplazamiento.png",
            description:
              "Multilingual text data collection in major languages and dialects.",
          },
     
        {
          name: "Text Evaluation u0026 Post Editing",
          img: "https://i.ibb.co/P41L1wy/003-processing.png ",
          description:
            "Gather diverse images and videos for model training.",
        },
        {
          name: "Speech u0026 Audio Collection",
          img: "https://i.ibb.co/V2KDsNK/Group-5.png ",
          description:
            "Collect audio clips in multiple languages and dialects.",
        },
      {
        name: "Text Collection",
        img: "https://i.ibb.co/xz4S9jS/papel.png",
        description:
          "Access tailored datasets to ensure your model responds accurately in real-world scenarios.",
      },
      {
        name: "Text Annotation (NER, POS)",
        img: "https://i.ibb.co/VYS3c3n/chat.png https://i.ibb.co/P41L1wy/003-processing.png",
        description:
          "Annotate speech data in over 235 languages and dialects for robust NLP and automatic speech recognition solutions.",
      },
      {
        name: "Search Results Evaluation",
        img: "https://i.ibb.co/nQ0FzsZ/023-search-1.png",
        description:
          "Collect domain-specific text data to build robust NLP systems and expand into new markets.",
      },
      {
          name: "Entity Extraction",
          img: "https://i.ibb.co/KbHwgjj/carrera.png",
          description:
            "Access high-quality language data to enable models to understand and respond to human speech across languages, dialects, and environments.",
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
        <img className=" w-12 imgs  h-justify" src={service.img} alt="" /><span className="pt-2 text-[18px]">{service.name}</span> 
         </p>
         <p className="text-style text-white font-normal text-[14px] text-justify  ">

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