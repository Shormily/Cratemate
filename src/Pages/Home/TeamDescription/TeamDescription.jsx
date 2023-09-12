import "animate.css";
const TeamDescription = () => {
  const services = [
    {
      name: "Innovation and Creativity",

      description:
        "We encourage innovation and creativity, providing you with the freedom to explore new ideas and push the boundaries of what's possible.",
    },
    {
      name: "Collaborative Culture",
      description:
        "Collaboration is at the heart of our culture. We believe that diverse minds working together lead to breakthrough solutions.",
    },

    {
      name: "Real-World Impact",

      description:
        "Our work has a real impact on industries and society as a whole. Join us in creating solutions that transform the way we live, work, and interact.",
    },
    {
      name: "Growth and Development",
      description:
        "Your growth is our priority. We provide continuous learning opportunities, mentorship, and a supportive environment to help you reach your full potential.",
    },
    {
      name: "Cutting-Edge Technology ",
      description:
        "Be at the forefront of technology. Work with the latest tools, platforms, and frameworks to solve complex challenges. ",
    },
    {
      name: "Mission-Driven Approach",
      description:
        "Our commitment to unraveling the potential of AI, Big Data, and Machine Learning sets us apart. This mission-driven approach highlights our dedication to using advanced technologies for the betterment of society.",
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
      name: "	Diversity",
      explain:
        "We celebrate diversity in all its forms. Our team comprises individuals with unique perspectives, experiences, and backgrounds.",
    },
    {
      name: "	Passion",
      explain:
        "We're driven by passion and the desire to make a difference. Our team members are enthusiastic about their work and the impact they create.",
    },
    {
      name: "	Curiosity",
      explain:
        "We encourage a curious mindset. As we navigate the evolving landscape of technology, curiosity fuels our continuous learning.",
    },
    {
      name: "Team Spirit",
      explain:
        "Collaboration is in our DNA. We support one another, share knowledge, and celebrate collective achievements.",
    },
  ];
  return (
    <>
      <div className="max-w-[1650px] m-auto  ">
        
      
        <h1 className="mx-12 text-center mt-12 font-bold pt-4  pb-5 text-4xl text-gray-950 text-shadow-lg  animate__animated animate__fadeInUp ">
        What Sets Us Apart?
        </h1>
        <p className="mx-12   text-[15px] font-medium text-center  pb-5  text-slate-950 text-shadow-lg    text-styles animate__animated animate__fadeInUp">
          we are on a mission to unravel the potential of Artificial
          Intelligence, Big Data, and Machine Learning, and we're looking for
          exceptional individuals to join us in this exciting journey.
        </p>
        <div className="grid lg:grid-cols-3 gap-12 md:grid-cols-3 sm:grid-cols-1 mt-12 mx-12 animate__animated animate__fadeInUp">
          {services.map((service) => (
            <>
              <div className="">
                <h1 className="text-2xl font-semibold text-center text-[#1d4ed8]">
                  {service.name}
                </h1>
                <p className="mt-3  text-justify text-[15px] font-medium   text-slate-950 text-shadow-lg    text-styles">
                  {service.description}
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
                <h1 className="text-2xl text-center font-semibold  text-[#1d4ed8]">
                  {Value.name} {" "}
                </h1>
                <p className="mt-3 text-justify  text-[15px] font-medium    text-slate-950 text-shadow-lg    text-styles">
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
        <div className="mt-12  ">
          <div className="">
          <p className="mx-12 text-center  text-gray-950 font-medium  text-[15px]  pb-12">
          Our workplace at Cratmate AI is built on a foundation of key principles that prioritize our team's well-being and growth. We offer competitive salary packages to ensure that your contributions are duly recognized. Moreover, we understand the importance of work-life balance, which is why we provide flexible work arrangements. Your health and wellness are paramount, and we support them through dedicated programs. We foster an innovation-driven culture that encourages creative thinking and problem-solving. Our environment is collaborative and inclusive, where diverse perspectives are valued. Additionally, we provide ample opportunities for professional development, ensuring that your career can flourish here. At Cratmate AI, we believe in a holistic approach to work, empowering you to thrive both personally and professionally.
        </p>
          </div>
        </div>
        <h1 className="mx-12 text-center font-bold pt-12  text-4xl text-gray-950 text-shadow-lg  ">
          Open Positions
        </h1>
        <div className="grid lg:grid-cols-3 mb-8 gap-12 md:grid-cols-3 sm:grid-cols-1 mt-12   mx-12">
          {positions.map((position) => (
            <>
              <div className="">
                <h1 className="text-2xl text-center  font-semibold text-[#1d4ed8] ">
                  {position.name}{" "}
                </h1>
                <p className="mt-3  text-justify  text-[15px] font-medium   text-slate-950 text-shadow-lg    text-styles">
                  {" "}
                  {position.explain}
                </p>
              </div>
            </>
          ))}
        </div>
        <h1 className="mx-12 text-center pt-12 font-extrabold   text-4xl text-gray-950 text-shadow-lg">
         Apply Here!
        </h1>
        <div className="mt-12   mx-12">
          <div className="font-normal text-center">
          <p className="mx-12 text-center  text-gray-950 font-medium  text-[15px]  pb-12">
          At Cratmate AI, you won't just be part of a team; you'll be part of a movement that's innovating, pushing limits, and making waves in the tech world. Let's shape the future together.
        </p>
           
          </div>
        </div>

        
      </div>
    </>
  );
};

export default TeamDescription;
