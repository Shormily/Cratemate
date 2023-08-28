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
      <div className="max-w-[1240px] m-auto ">
        <h1 className="mx-12 pt-12   pb-8 text-5xl text-gray-900 text-shadow-lg   text-styles">
          Join Our Team and Shape the Future with Cratmate AI
        </h1>
        <p className="mx-12 cont-pra  text-[15px]   pb-5  text-gray-500 text-shadow-lg    text-styles">
          Are you passionate about harnessing the power of cutting-edge
          technology to drive innovation and shape the future? <br /> Do you
          thrive in a collaborative and dynamic environment where creativity
          knows no bounds?At Cratmate AI,
          <br /> we are on a mission to unravel the potential of artificial
          intelligence, big data, and machine learning,
          <br /> and we're looking for exceptional individuals to join us in
          this exciting journey.
        </p>
        <h1 className="mx-12 text-center pt-4  pb-5 text-4xl text-gray-700 text-shadow-lg   text-styles">
          Why Work with Us?
        </h1>
        <div className="grid lg:grid-cols-3 gap-12 md:grid-cols-2 sm:grid-cols-1 mt-12 mx-12">
          {services.map((service) => (
            <>
              <div className="">
                <h1 className="text-styles text-2xl mb-2">{service.name}</h1>
                <p className="cont-pra w-75% text-[15px]">
                  {service.description}
                </p>
              </div>
            </>
          ))}
        </div>
        <h1 className="mx-12 text-center pt-12  pb-5 text-4xl text-gray-700 text-shadow-lg   text-styles">
          Open Positions
        </h1>
        <div className="grid lg:grid-cols-4 mb-8 gap-12 md:grid-cols-2 sm:grid-cols-1 mt-12   mx-12">
          {positions.map((position) => (
            <>
              <div className="">
                <h1 className="text-styles text-2xl mb-3">
                  {position.name} :{" "}
                </h1>
                <p className="cont-pra text-gray-500  text-[15px]">
                  {" "}
                  {position.explain}
                </p>
              </div>
            </>
          ))}
        </div>
        <h1 className="mx-12 text-center pt-12  pb-5 text-4xl text-gray-700 text-shadow-lg   text-styles">
          What We Value
        </h1>
        <div className="grid lg:grid-cols-4 mb-12 gap-12 md:grid-cols-2 sm:grid-cols-1 mt-12   mx-12">
          {Values.map((Value) => (
            <>
              <div className="">
                <h1 className="text-styles text-2xl mb-3">{Value.name} : </h1>
                <p className="cont-pra text-gray-500  text-[15px]">
                  {" "}
                  {Value.explain}
                </p>
              </div>
            </>
          ))}
        </div>
        <h1 className="mx-12 text-center    text-4xl text-gray-700 text-shadow-lg   text-styles">
          Benefits and Perks
        </h1>
        <div className="mt-12   mx-12">
          <div className="">
        
            <p className="cont-pra text-gray-500  text-[18px]">   
              1.<span className="mx-3">Competitive salary packages</span> 
            </p>
            <p className="cont-pra text-gray-500  text-[18px]">        
              2. <span className="mx-2">Flexible work arrangements</span>
            </p>
            <p className="cont-pra text-gray-500  text-[18px]">        
              3. <span className="mx-2">Health and wellness programs</span>
            </p>
            <p className="cont-pra text-gray-500  text-[18px]">        
              4. <span className="mx-2">Professional development opportunities</span>
            </p>
            <p className="cont-pra text-gray-500  text-[18px]">     
              5.<span className="mx-2"> Innovation-driven culture</span>
            </p>
            <p className="cont-pra text-gray-500  text-[18px]">
             6.  <span className="mx-2">Collaborative and inclusive environment</span>
            </p>
          </div>
        </div>
        <h1 className="mx-12 text-center    text-4xl text-gray-700 text-shadow-lg   text-styles">
        How to Apply
        </h1>
        <div className="mt-12   mx-12">
          <div className="">
           
            <p className="cont-pra text-gray-700  text-[15px]">   
            Are you excited to be part of a team that's shaping the future of AI and data-driven solutions? Join us in creating technology that transforms industries and makes a lasting impact. Explore our current openings and apply today by sending your resume and a cover letter to umesh@cratmate.com.
            </p>
            <p className="cont-pra text-gray-700  text-[15px]">   
            At Cratmate AI, you'll not only be part of a team; you'll be part of a movement that's driving innovation, pushing boundaries, and making waves in the world of technology. Let's shape the future together.
            </p>
           
          </div>
        </div>

        <p className="mx-12 cont-pra text-red-600  text-[19px] mt-4 mb-5">If you want to join our company please fill this form :</p>
      </div>
    </>
  );
};

export default TeamDescription;
