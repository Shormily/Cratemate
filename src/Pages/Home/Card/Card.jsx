import "./Card.css";
const Card = () => {
  const services = [
    {
      name: " Data Scientists",
      img: "https://i.ibb.co/3F2ZjDL/Frame-3.png",
      description:
        "Experts with years of R&D industry experience in AI to deploy large-scale AI solutions and identify common pain points pre-deployment.",
    },
    {
      name: " Machine Learning ",
      img: "https://i.ibb.co/3BKGv9v/Frame-1.png",
      description:
        "Highly experienced engineers in predictive analytics, big data, and data strategy with backgrounds and skills in data science and applied research to manage machine learning projects.",
    },
    {
      name: " Professional Linguists",
      img: "https://i.ibb.co/529Lts1/Frame-2.png",
      description:
        "Access insight into cultural nuances through a team of professional linguists. They have the unique ability to unite project management expertise and deep linguistic knowledge to deliver quality results.",
    },
    {
      name: " Translation",
      img: "https://i.ibb.co/qjnVDXf/Frame-3.png",
      description:
        "Translation services to train and develop AI systems to ensure AI systems will be trained to work as expected in varying scenarios.",
    },
  ];
  return (
    <>
      <div className="max-w-[1240px] m-auto pl-8 mt-8">
        <h1 className=" text-gray-600 text-[25px] cont-pra">
          Subject Matter Expertise
        </h1>
        <p className=" block text-[12px]  banner-text  mb-2 leading-loose text-gray-500 cont-pra">
          Trusted partners to deliver full-service support through every stage
          of the AI lifecycle.
        </p>
      </div>

      <div className="card ">
        {services.map((service) => (
          <>
            <div className="box">
              <div className="glass"></div>
              <div className="content">
                <img className="mt-8" src={service.img} alt="" />
                <h2 className=" text-gray-600 text-[20px] cont-pra">
                  {service.name}
                </h2>
                <p className=" block text-[12px]  banner-text mt-5 mb-2 leading-loose text-gray-500 cont-pra">
                  {service.description}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="max-w-[1200px] mb-12 m-auto pl-8 mt-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div>
          {" "}
          <h1 className=" text-gray-600 text-[22px] cont-pra">
            Expert Technology
          </h1>
          <p className=" block text-[12px]  banner-text  mb-2 leading-loose text-gray-500 cont-pra">
            25+ years delivering data with state-of-the-art technology.
          </p>
          <h1 className="mt-2 text-[#DC3318] font-semibold cont-pra text-1xl ">
            LEARN MORE{" "}
          </h1>
        </div>
        <div>
          {" "}
          <h1 className=" text-gray-600 text-[22px] cont-pra">
            1+ Million Contributors
          </h1>
          <p className=" block text-[12px]  banner-text  mb-2 leading-loose text-gray-500 cont-pra">
            Get curated content from our global crowd of flexible contributors.
          </p>
          <h1 className="mt-2 text-[#DC3318] font-semibold cont-pra text-1xl ">
            LEARN MORE{" "}
          </h1>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-24  max-w-[1240px] m-auto pt-8 px-8 ">
        <div>
          <img
            src="https://i.ibb.co/3dmQK7G/Case-Studies-e-Commerce-4-2.png"
            className="w-96 mt-5"
            alt=""
          />
        </div>
        <div className="">
        <h1 className="text-gray-600 text-1xl cont-pra mx-5 ">Fine-tuning LLMs for personalized shopping assistance</h1>
          <p className="block text-gray-700 text-[12px] font-semibold mb-2 p-5 cont-pra">
          <span className="pb-4"> CHALLENGE: Online shoppers often abandon purchases when they can’t
            find suitable products or evaluate their suitability. Our client, a
            global e-commerce leader, aims to launch an efficient shopping
            assistant that can digest their evolving catalog, answer customer
            questions effectively, and represent their brand.</span>
           
            <br />
            <br />
         <span className="pt-8">SOLUTION: The client needed a dataset of realistic product-related
            Q&A’s, including metadata like category, shopping stage, and
            reference URLs. Using Appen RLHF and a diverse team of US-based AI
            Training Specialists, we provided 112k product catalog prompts,
            responses, and requested metadata.</span>   
            <br />
            <br />
          <span>
          RESULTS: The client appreciated our linguists’ edits and additions
            to the guidelines, leading to high-quality prompts and responses.
            They used the dataset to fine-tune their LLM for product catalog
            inquiries, achieving significant improvements in performance
            throughout the shopping journey and aligning the model’s responses
            with their brand voice.
            </span>  
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
