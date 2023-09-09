import "animate.css";
const TeamDescription = () => {
  const services = [
    {
      name: "Innovate",

      description:
        "We encourage innovation and creativity, providing you with the freedom to explore new ideas and push the boundaries of what's possible.",
    },
    {
      name: "Collaborate",
      description:
        "Collaboration is at the heart of our culture. We believe that diverse minds working together lead to breakthrough solutions.",
    },

    {
      name: "	Impact",

      description:
        "Our work has a real impact on industries and society as a whole. Join us in creating solutions that transform the way we live, work, and interact.",
    },
    {
      name: "Growth",
      description:
        "Your growth is our priority. We provide continuous learning opportunities, mentorship, and a supportive environment to help you reach your full potential.",
    },
    {
      name: "Cutting-Edge Technology ",
      description:
        "Be at the forefront of technology. Work with the latest tools, platforms, and frameworks to solve complex challenges. ",
    },
  ];

  const positions = [
    {
      name: "Data Scientist",
      explain:
        "Are you passionate about extracting insights from data and driving decision-making through analytics? Join our data science team and work on projects that redefine possibilities.",
    },

    {
      name: "Software Engineer",
      explain:
        "Help us build robust and scalable software solutions that power our AI-driven applications and platforms.",
    },
    {
      name: "UI/UX Designer",
      explain:
        "Craft intuitive and engaging user experiences that seamlessly blend human interaction with advanced technology.",
    },
    {
      name: "Product Manager",
      explain:
        "Lead the development of our AI-driven products from concept to launch, working closely with cross-functional teams to deliver exceptional solutions.",
    },
    {
      name: "Process Analyst",
      explain:
        "Are you ready to make an impact in the world of data transcription and annotation? Join us in driving innovation, accuracy, and efficiency in data processing.",
    },
    {
      name: "Machine Learning Engineer",
      explain:
        "Shape the future of machine learning by developing algorithms and models that enable machines to learn and make intelligent decisions.",
    },
  ];

  const Values = [
    {
      name: "Diversity",
      explain:
        "Are you passionate about extracting insights from data and driving decision-making through analytics? Join our data science team and work on projects that redefine possibilities.",
    },
    {
      name: "Data Scientist",
      explain:
        "Are you passionate about extracting insights from data and driving decision-making through analytics? Join our data science team and work on projects that redefine possibilities.",
    },
    {
      name: "Data Scientist",
      explain:
        "Are you passionate about extracting insights from data and driving decision-making through analytics? Join our data science team and work on projects that redefine possibilities.",
    },
    {
      name: "Data Scientist",
      explain:
        "Are you passionate about extracting insights from data and driving decision-making through analytics? Join our data science team and work on projects that redefine possibilities.",
    },
  ];
  return (
    <>
      <div className="max-w-[1650px] m-auto  ">
        {/* <h1 className="mx-12 pt-12  pb-8 text-center text-5xl text-gray-950 text-shadow-lg  animate__animated animate__fadeInUp font-extrabold ">
         
        </h1> */}
        <p className="mx-12 mt-24  text-[15px] font-medium text-center  pb-5  text-slate-950 text-shadow-lg    text-styles animate__animated animate__fadeInUp">
          we are on a mission to unravel the potential of Artificial
          Intelligence, Big Data, and Machine Learning, and we're looking for
          exceptional individuals to join us in this exciting journey.
        </p>
        <h1 className="mx-12 text-center font-bold pt-4  pb-5 text-4xl text-gray-950 text-shadow-lg  animate__animated animate__fadeInUp ">
          Why Work with Us ?
        </h1>
        <div className="grid lg:grid-cols-3 gap-12 md:grid-cols-2 sm:grid-cols-1 mt-12 mx-12 animate__animated animate__fadeInUp">
          {services.map((service) => (
            <>
              <div className="">
                <h1 className="text-2xl font-semibold text-center text-[#1d4ed8]">
                  {service.name}
                </h1>
                <p className="mt-3   text-[15px] font-medium   text-slate-950 text-shadow-lg    text-styles">
                  {service.description}
                </p>
              </div>
            </>
          ))}
        </div>
        <h1 className="mx-12 text-center font-bold pt-12  text-4xl text-gray-950 text-shadow-lg  ">
          Open Positions
        </h1>
        <div className="grid lg:grid-cols-4 mb-8 gap-12 md:grid-cols-2 sm:grid-cols-1 mt-12   mx-12">
          {positions.map((position) => (
            <>
              <div className="">
                <h1 className="text-2xl  font-semibold text-[#1d4ed8] ">
                  {position.name}{" "}
                </h1>
                <p className="mt-3    text-[15px] font-medium   text-slate-950 text-shadow-lg    text-styles">
                  {" "}
                  {position.explain}
                </p>
              </div>
            </>
          ))}
        </div>
        <h1 className="mx-12 text-center font-extrabold pt-12  text-4xl text-gray-950 text-shadow-lg">
          What We Value
        </h1>
        <div className="grid lg:grid-cols-4 mb-12 gap-12 md:grid-cols-2 sm:grid-cols-1 mt-12   mx-12">
          {Values.map((Value) => (
            <>
              <div className="">
                <h1 className="text-2xl font-semibold  text-[#1d4ed8]">
                  {Value.name} {" "}
                </h1>
                <p className="mt-3   text-[15px] font-medium    text-slate-950 text-shadow-lg    text-styles">
                  {" "}
                  {Value.explain}
                </p>
              </div>
            </>
          ))}
        </div>
        <h1 className="mx-12 text-center pt-12 font-extrabold text-4xl text-gray-950 text-shadow-lg">
          Benefits and Perks
        </h1>
        <div className="mt-12  max-w-[400px] m-auto  ">
          <div className="">
            <p className=" text-gray-900 font-bold text-[18px]">
              <span className="text-2xl">1.</span>
              <span className="mx-3  text-[18px] text-[#1d4ed8] font-medium">
                Competitive salary packages
              </span>
            </p>
            <p className=" text-gray-900  text-[18px] font-medium">
              <span className="text-2xl font-bold">2.</span>
              <span className="mx-2 text-[#1d4ed8] font-medium">
                Flexible work arrangements
              </span>
            </p>
            <p className=" text-gray-900  text-[18px]">
              <span className="text-2xl  text-[#1d4ed8] font-bold">3.</span>
              <span className="mx-2 text-[#1d4ed8] font-medium">
                Health and wellness programs
              </span>
            </p>
            <p className=" text-gray-900  text-[18px]">
              <span className="text-2xl font-bold">4.</span>
              <span className="mx-2 text-[#1d4ed8] font-medium">
                Professional development opportunities
              </span>
            </p>
            <p className=" text-gray-900  text-[18px]">
              <span className="text-2xl font-bold">5.</span>
              <span className="mx-2 text-[#1d4ed8] font-medium">
                {" "}
                Innovation-driven culture
              </span>
            </p>
            <p className=" text-gray-900  text-[18px]">
              <span className="text-2xl font-bold">6.</span>
              <span className="mx-2 text-[#1d4ed8] font-medium">
                Collaborative and inclusive environment
              </span>
            </p>
          </div>
        </div>
        <h1 className="mx-12 text-center pt-12 font-extrabold   text-4xl text-gray-950 text-shadow-lg">
          How to Apply
        </h1>
        <div className="mt-12   mx-12">
          <div className="font-normal">
            <p className=" text-gray-950 font-medium text-center  text-[15px]">
              Are you excited to be part of a team that's shaping the future of
              AI and data-driven solutions? Join us in creating technology that
              transforms industries and makes a lasting impact. Explore our
              current openings and apply today by sending your resume and a
              cover letter to umesh@cratmate.com. At Cratmate AI, you'll not
              only be part of a team; you'll be part of a movement that's
              driving innovation, pushing boundaries, and making waves in the
              world of technology. Let's shape the future together.
            </p>
          </div>
        </div>

        <p className="mx-12  text-[#1d4ed8] font-semibold  text-[19px] mt-4 mb-5">
          If you want to join our company please fill this form :
        </p>
      </div>
    </>
  );
};

export default TeamDescription;
