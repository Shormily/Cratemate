
const Relevence = () => {
    const services = [
      {
        name: "Video Annotation",
        img: "https://i.ibb.co/whhVYpP/point-cloud-annotation.png",
        description:
          "Choose from a range of annotation services including video classification, transcription, object tracking (with Speed Labeling for automated frame-to-frame annotation), object detection, and time stamping.",
      },
      {
        name: "Image Annotation",
        img: "https://i.ibb.co/PNwQh14/Pre-Labeled-Datasets-Black-Icon-1.png",
        description:
          "Create image annotation tasks using polygons, dots, lines, rotating bounding boxes, ellipses, and collect additional object information in shapes using ontologies for faster, more flexible, and accurate image annotation.",
      },
      {
        name: "Pixel Level Semantic Segmentation",
        img: "https://i.ibb.co/9V2tdKj/video-annotation.png",
        description:
          "Achieve precise labeling at the pixel level for computer vision models. Use Pixel Level Semantic Segmentation (PLSS) for highly accurate labeling down to each pixel, enhancing overall accuracy and performance.",
      },
      {
        name: "Point Cloud Annotation",
        img: "https://i.ibb.co/W2cDc1f/rebobinar-1.png",
        description:
          "Manage annotations for various types of point cloud data, including LiDAR, Radar, and other scanner/sensor types, within a single project using our intuitive annotation interface.",
      },
      {
        name: "Pre-Labeling",
        img: "https://i.ibb.co/Z2WjPVy/image-transcription-1.png",
        description:
          "Accelerate annotation by selecting the most suitable model from the library, and then have contributors review and edit the output as needed.",
      },
      
      {
          name: "Image Transcription",
          img: "https://i.ibb.co/YpCXn9f/Pixel-Level-Semantic-Segmentatio.png",
          description:
            "Draw bounding boxes around text in images and auto-transcribe it in a single step. Obtain localized text for enhanced OCR training data.",
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