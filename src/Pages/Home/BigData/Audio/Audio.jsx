
const Relevence = () => {
    const services = [
        {
            name: "Audio Annotation",
            img: "https://i.ibb.co/q1TbWxq/ondas-de-sonido.png",
            description:
              "Divide audio into layers, speakers, and timestamps for your Audio Speech Recognition and other audio-based models. Train your models to accurately identify different speakers and other audio cues.",
          },
     
      
      {
        name: "Audio Transcription",
        img: "https://i.ibb.co/cL44zm0/traduccion.png",
        description:
          "Enhance transcription quality and efficiency using built-in NLP models. Transcribe spoken audio into text or validate machine-generated transcriptions to accurately train Audio Speech Recognition models.",
      },
      {
        name: "Audio Classification",
        img: "https://i.ibb.co/zHXvrDX/charlar.png",
        description:
          "Employ sound categorization or utterance classification to categorize audio based on language, dialect, semantics, and other features. This process aids in training models to comprehend spoken cues.",
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
          <p className="text-style text-white font-normal text-[14px] text-justify">

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