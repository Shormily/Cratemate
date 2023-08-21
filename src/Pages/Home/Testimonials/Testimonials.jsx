const animation = { duration: 20000, easing: (t) => t };
import { useKeenSlider } from "keen-slider/react";
const Testimonials = () => {
    
    const [sliderRef] = useKeenSlider({
        loop: {
            min: -5,
            max: 5,
          },
        mode: "free",
        created(s) {
          s.moveToIdx(5, true, animation);
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        
        breakpoints: {
          "(min-width: 400px)": {
            slides: { perView: 1, spacing: 5 },
          },
          "(min-width: 390px)": {
            slides: { perView: 1, spacing: 5 },
          },
          "(min-width: 360px)": {
            slides: { perView: 1, spacing: 5 },
          },
          "(min-width: 820px)": {
            slides: { perView: 2, spacing: 5 },
          },
    
          "(min-width: 1000px)": {
            slides: { perView: 3, spacing: 10 },
          },
          "(min-width: 768px)": {
            slides: { perView: 2, spacing: 10 },
          },
          "(min-width: 696px)": {
            slides: { perView: 2, spacing: 10 },
          },
          "(min-width: 1850px)": {
            slides: { perView: 1, spacing: 10 },
          },
          "(min-width: 1784px)": {
            slides: { perView: 1, spacing: 10 },
          },
          "(min-width: 1656px)": {
            slides: { perView: 1, spacing: 10 },
          },
          "(min-width: 1440px)": {
            slides: { perView: 2, spacing: 10 },
          },
          "(min-width: 1430px)": {
            slides: { perView: 2, spacing: 10 },
          },
          "(min-width: 1400px)": {
            slides: { perView: 2, spacing: 10 },
          },
          "(min-width: 1120px)": {
            slides: { perView: 2, spacing: 10 },
          },
        },
      });
      const services = [
        {
          name: " Data Collection",
          img: "https://i.ibb.co/m6m7hHZ/image-transcription.png",
          description:
            "The White House’s Artificial Intelligence voluntary safety commitments.",
        },
        {
          name: "Data Processing",
          img: "https://i.ibb.co/Yt5mPYR/019-brain.png",
          description:
            "How Artificial Intelligence is Transforming Our Everyday Lives for the Better ",
        },
        {
          name: "Data Analysis",
          img: "https://i.ibb.co/vHjLHjX/exito.png",
          description:
            "Unraveling the Link Between Translations and Gender Bias in LLMs",
        },
    
        {
          name: "Quality control",
          img: "https://i.ibb.co/HDyWK63/ontology-icon.png",
          description:
            "Natural Language Processing – Connecting The World through Language With AI",
        },
        {
          name: "Android",
          img: "https://i.ibb.co/Vw0Wq5V/target-1.png",
          description:
            "Enhancing AI Efficiency: Streamlining AI Training Data with Workflows ",
        },
      ];
    return (
        <>
         <div  ref={sliderRef}  className="keen-slider max-w-[1190px] m-auto">   {services.map((service) => (
            <>
              <div className=" mb-3  pt-3 mb-5 keen-slider__slide number-slide2 " >
                <div className="flex gap-12">
                  <div className="">
                    <div className="">
                      <img
                        className=" rounded-5 h-24 w-30 mt-5"
                        src={service.img}
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="block text-orange-600   font-semibold mb-2 mt-3  ">
                     {service.name}
                    </h4>
                    <p className="block text-gray-700 text-[12px] font-semibold mb-2 w-64 ">
                      {service.description}
                    </p>

                    <p className="cont-pra text-center text-[13px] flex">
                      Read More{" "}
                     
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}  </div>
           
        </>
    );
};

export default Testimonials;