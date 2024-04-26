import { auth, googleProvider } from "../../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export default () => {
  const signIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-component" onClick={signIn}>
      <button className="goggle-btn">
        <span className="brand-text">Log In</span>
      </button>
    </div>
  );
};

// catchAsync(async () => {
//   await signInWithPopup(auth, googleProvider);
// });
