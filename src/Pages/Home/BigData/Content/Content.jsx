
const Relevence = () => {
    const services = [
      {
        name: "Content Curation ",
        img: "https://i.ibb.co/vZPFpv3/RGB-White-Paper-Transcribe-png.png",
        description:
          "Curate valuable and relevant information that resonates with your intended audience.",
      },
      {
        name: "Search & Query Excellence ",
        img: "https://i.ibb.co/8bHNMgk/RGB-White-Cog-Check-png.png",
        description:
          "Mastering query interpretation, we deliver search results that precisely match user intent.",
      },
      
      {
          name: "Crafting Content ",
          img: "https://i.ibb.co/qnT2pz1/ethical-png-removebg-preview.png",
          description:
            "Tailor-made marketing materials for enhanced visibility and brand recognition.",
        },
        {
          name: "Relevant Ads",
          img: "https://i.ibb.co/7jdPN9L/Scale-2x-png-removebg-preview.png",
          description:
            "Deliver high-quality, culturally relevant ads by aligning content with query, context, and audience needs.",
        },
      {
        name: "Scalable Expertise",
        img: "https://i.ibb.co/XtTFRN4/RGB-White-Search-png.png",
        description:
          "Managing over 1 billion content relevance judgments annually for leading tech giants, our in-house data experts ensure scalable and accurate results.",
      },
      {
        name: "Unbiased Global Reach",
        img: "https://i.ibb.co/m85Kdsq/RGB-White-Structure-png.png",
        description:
          "With a diverse crowd of 1 million contributors from 235+ countries, our solutions cater to a global audience, providing unbiased accuracy.",
      },
      {
        name: "Localized Precision ",
        img: "https://i.ibb.co/5LnPgbx/RGB-White-Personalization-png.png",
        description:
          "Tap into our network of local experts who cater to your target market's demographics, ensuring content alignment and localization.",
      },
     
        {
          name: "Multimedia Mastery",
          img: "https://i.ibb.co/pv5DTWg/019-brain-2.png",
          description:
            "Decode queries for multimedia platforms, ensuring relevant results across formats.",
        },
       
        {
          name: "Confident Model Updates",
          img: "https://i.ibb.co/Wx7KJHS/024-digital.png",
          description:
            "Optimize performance with confidence, deploying model updates that outperform in a blind test.",
        },
       
        
        {
          name: "Credible Newsfeeds",
          img: "https://i.ibb.co/88H5tBh/Evaluation-Annotation.png",
          description:
            "Guarantee content credibility through evaluations for newsfeeds and social media.",
        },
        {
          name: "Tagging Post Interests",
          img: "https://i.ibb.co/3Ns4yRR/RGB-White-Monitor-Graphs-png.png",
          description:
            "Apply attributes to pre-specified images, enhancing data categorization.",
        },
        {
          name: "Content Review",
          img: "https://i.ibb.co/fv0jQCd/RGB-White-Search-Relevance-png.png",
          description:
            "Ensure consumer-sensitive content by reviewing and identifying potentially offensive, violating, or sensitive material.",
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