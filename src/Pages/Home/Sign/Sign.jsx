import { MdEmail } from "react-icons/md";
import "./Sign.css";
import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
 
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { PiLockLaminatedFill } from "react-icons/pi";
import { AiOutlineUserAdd } from "react-icons/ai";
// import { toast } from "react-hot-toast";
import { useState } from "react";

const Sign = () => {
  const notify = () => toast("Wow so easy!");
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(true);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const auth = getAuth(app);
  // console.log(app);
  const provider = new GoogleAuthProvider();
  const providers = new FacebookAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("SuccessFully Sign In");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("crror", error.message);
      });
  };
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, providers)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("SuccessFully Sign In");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("crror", error.message);
      });
  };

  const handleSubmit = (event) => {
    // Prevent page refresh
    event.preventDefault();
    setSuccess('')
    setError('')
    // Collection from data
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    // validate
    if(!/(?=.*[A-Z])/.test(password)){
      setError('Please add at least one uppercase');
      return;
    }
    else if(!/(?=.*[0-9].*[0-9])/.test(password)){
      setError('Please add at least two numbers')
    }
    else if(password.length){
      setError('Please add at least 6 characters in ypur password')
    }

    // create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
          event.target.reset()
          // navigate(from, { replace: true });
          setSuccess( "User has been created successfully" );
          sendVerificationEmail(result.user);
          
      })
      .catch((error) => {
        console.log(error.message);
       setError(error.message)
     
      });
  };
  const sendVerificationEmail = (user) =>{
    sendEmailVerification(user)
    .then(result =>{
      console.log(result);
      alert('Please verify your email address')
    })
  }
  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    console.log(event.target.value);
    // setEmail(event.target.value);
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>
        <div className="sign">
          <div className=" m-auto max-w-[1240px] flex item-center  justify-center">
            <div className="login-margin ">
              <h1 className="text-5xl text-shadow-lg mx-5   mt-12">
                Welcome Back
              </h1>
              <div className="mt-5 pb-3">
                <p
                  style={{
                    backgroundColor: "#E6EBFF",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "2px",

                    display: "flex",
                  }}
                  className="rounded-5 w-75 shadow-lg "
                >
                  <span className="mx-4 text-dark">
                    <AiOutlineUserAdd className="mt-2" size={20} />
                  </span>{" "}
                  <div className="input-group-prepend">
                    <input
                      className="  appearance-none border font-normal   bg-[#E6EBFF] w-full  px-3 text-gray-700 leading-tight focus:outline-none "
                      id="username"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </p>
              </div>
              <div className="mt-5 pb-3">
                <p
                  style={{
                    backgroundColor: "#E6EBFF",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "2px",

                    display: "flex",
                  }}
                  className="rounded-5 w-75 shadow-lg "
                >
                  <span className="mx-4 text-dark">
                    <MdEmail className="mt-2" size={20} />
                  </span>
                  <div className="input-group-prepend">
                    <input
                      className="  appearance-none border font-normal   bg-[#E6EBFF] w-full  px-3 text-gray-700 leading-tight focus:outline-none "
                      onChange={handleEmailChange}
                      type="email"
                      name="email"
                      id="email"
                    />
                  </div>
                </p>
              </div>
              <div className="mt-5 pb-3">
                <p
                  style={{
                    backgroundColor: "#E6EBFF",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "2px",

                    display: "flex",
                  }}
                  className="rounded-5 w-75 shadow-lg "
                >
                  <span className="mx-4 text-dark">
                    <PiLockLaminatedFill className="mt-2" size={20} />
                  </span>
                  <div className="input-group-prepend">
                    <input
                      className=" appearance-none border font-normal  bg-[#E6EBFF] w-full  px-3 text-gray-700 leading-tight focus:outline-none "
                      onBlur={handlePasswordBlur}
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                </p>
              </div>

              <button onClick={notify}>{error}</button>
            
              <p className="text-red-600  pb-3"></p>
              <input
                className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                onBlur={handlePasswordBlur}
                type="submit"
                value="Register"
              />
              <p className="text-center  text-white pt-3 pb-3">- OR -</p>
              <div className=" ">
                {/* <button
                  type="button"
                  className="text-white bg-[#8fa2f0] shadow-lg hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  onClick={handleFacebookSignIn}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sign in with Facebook
                </button> */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="text-white bg-[#8fa2f0] w-full hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 text-center" 
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </div>
              <NavLink as={NavLink} to="/login" className="text-border">
                {" "}
                <p className="ml-5 text-white  text-center  login-heading mt-5 ">
                  Don’t have account ?{" "}
                  <span className="textss">Create Account</span>{" "}
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Sign;
