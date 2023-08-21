import "./Servone.css";


const Servone = () => {
  return (
    <>
      <section className="bg-gray-100 pb-8">
        <div >   <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 max-w-[1240px] m-auto">
     <div className=" pt-8 px-8 ">
       <p className=" pt-8  text-5xl   text-styles   ">Our Services</p>
       <p
         // className="text-white mt-4  text-base  leading-loose banner-text"
         className="block text-[12px]  banner-text mt-5 mb-2 leading-loose text-gray-800 cont-pra"
       >
         DTP Service, Data Processing, Image Proceesing, Software
         Development,
         <br />
         Web Design, E-commerce Platform, Multilingual Translation, Big
         Data, <br /> Annotation Service, Data Collection,Transcription,
         Machine Learning,
         <br /> Artificial Intelligence, and ASR.
       </p>
       <div className="flex mb-4 mt-8">
         <h1 className="mt-2 text-[#DC3318] font-semibold cont-pra text-1xl mx-2">
           LEARN MORE{" "}
         </h1>
         <button
           type="button"
           className="text-white bg-[#DC3318] hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-400 font-medium  text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:focus:ring-cyan-300"
         >
           <svg
             className="w-5 h-5"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 14 10"
           >
             <path
               stroke="currentColor"
               stroke-linecap="round"
               stroke-linejoin="round"
               stroke-width="2"
               d="M1 5h12m0 0L9 1m4 4L9 9"
             />
           </svg>
         </button>
       </div>
     </div>
     <div className="ml-24 mt-8 mb-8">
       <div className="flex  mt-8 ">
         <img
           src="https://i.ibb.co/xJyQx5Y/CMYK-Blue-LVL-1-Big-Data-png.png"
           className="w-24 h-24 mx-12"
           alt=""
         />
         <img
           src="https://i.ibb.co/nj8prs9/ezgif-com-webp-to-png.png"
           className="w-24 h-24  "
           alt=""
         />
       </div>

       <div className="flex mt-3 ">
         <img
           src="https://i.ibb.co/dtw6k5X/CMYK-Blue-LVL-1-Crowd-Platform-png.png"
           className="w-24 h-24 mx-12"
           alt=""
         />
         <img
           src="https://i.ibb.co/hm72vSb/CMYK-Blue-LVL-1-OTS-Training-Datasets-png.png"
           className="w-24 h-24 "
           alt=""
         />
       </div>
     </div>
   </div></div>
     
      </section>
    
    </>
  );
};

export default Servone;
