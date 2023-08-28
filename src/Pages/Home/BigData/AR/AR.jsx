
const Relevence = () => {
    const services = [
        {
            name: "Object Detection & Recognition",
            img: "https://i.ibb.co/QYsSWGG/alrededor-del-mundo.png",
            description:
              "Merge digital objects with physical surroundings and facilitate their interaction.",
          },
     
      
      {
        name: "Text Recognition & Translation",
        img: "https://i.ibb.co/cL44zm0/traduccion.png",
        description:
          "Overlay translations on books, street signs, and other text elements.",
      },
      {
        name: "Procedural Content Generation",
        img: "https://i.ibb.co/Ltfmvn1/004-network.png",
        description:
          "Develop customized characters, environments, and graphical elements.",
      },
      {
        name: "Object Labeling",
        img: "https://i.ibb.co/NnLRjbJ/040-file.png",
        description:
          "Exhibit descriptive labels on images and components within scenes.",
      },
      {
        name: "Audio Recognition",
        img: "https://i.ibb.co/LkFnsc6/035-artificial-intelligence.png",
        description:
          "Initiate image effects corresponding to spoken keywords.",
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
              <p className="content-text ">

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