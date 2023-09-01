// import { auth,googleProvider} from "../Firebase/Firebase.config";

import { auth ,googleProvider} from "../Firebase/Firebase.config";

const GoogleAuth = () => {
  const handleSignIn = async () => {
    try {
      await auth.signInWithPopup(googleProvider);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div>
        <h1 className="text-red-500">Hi google loger</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default GoogleAuth;