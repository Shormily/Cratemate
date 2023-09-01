
const Relevence = () => {
    const services = [
        {
            name: "Ontology Design",
            img: "https://i.ibb.co/tmVRL7K/headphone.png",
            description:
              "Develop a structured ontology to categorize items and events crucial for your application's comprehension. This fosters connections between text information and item properties.",
          },
     
        {
          name: "Conversational Design",
          img: "https://i.ibb.co/5M0c3rt/respeto.png",
          description:
            "Craft user scenarios aligned with your application's functionality to thoroughly train your chatbot. This ensures accurate and prompt responses to user inquiries.",
        },
        {
          name: "Data Annotation",
          img: "https://i.ibb.co/GWbgx30/042-data.png",
          description:
            "Tap into our global crowd for precise, high-quality annotation of keywords, entity types, intents, sentiment, and other significant elements of natural language.",
        },
      {
        name: "Model Evaluation",
        img: "https://i.ibb.co/PcQMppf/archivo.png",
        description:
          "Assess the success of your model, pinpoint areas needing adjustment, and provide support to enhance both design and performance.",
      },
      {
        name: "Multilingual Pre-Labeled Datasets",
        img: "https://i.ibb.co/HrK7sL6/archivos.png",
        description:
          "Benefit from our extensive catalog of over 270 datasets featuring more than 11,000 hours of transcribed speech data in various languages.",
      },
      {
        name: "Data Creation & Collection",
        img: "https://i.ibb.co/nQ0FzsZ/023-search-1.png",
        description:
          "Utilize our diverse crowd of over 1 million contributors to gather unbiased model training data that precisely aligns with your application scenarios.",
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