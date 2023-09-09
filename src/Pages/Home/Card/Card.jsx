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
        "Highly experienced our engineers in predictive analytics, big data, and data strategy with backgrounds and skills in data science and applied research to manage machine learning projects.",
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
    <div id="card">
    <div className="max-w-[1500px] m-auto pl-8 mt-8">
        <h1 className="  pt-8 text-gray-950 text-4xl font-bold mx-3 ">
          Subject Matter Expertise
        </h1>
        <p className=" font-medium mt-4 mb-3 text-style text-gray-600 mx-3">
          Trusted partners to deliver full-service support through every stage
          of the AI lifecycle.
        </p>
      </div>

      <div className="card mb-12 max-w-[1500px] m-auto">
        {services.map((service) => (
          <>
            <div className="box">
              <div className="glass"></div>
              <div className="content">
                <img className="mt-12" src={service.img} alt="" />
                <h2 className=" text-gray-700 font-semibold text-[23px] ">
                  {service.name}
                </h2>
                <p className=" font-medium text-justify mt-4 mb-3 text-[14px] text-style text-gray-700 mx-3">
                  {service.description}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
    

      
    </>
  );
};

export default Card;
