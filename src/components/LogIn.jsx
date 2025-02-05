import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/slices/authSlice";
import Cookies from "js-cookie";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rememberMe] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (rememberMe) {
        Cookies.set("userToken", user.accessToken, { expires: 7 });
      } else {
        Cookies.set("userToken", user.accessToken);
      }

      dispatch(loginSuccess(user));
      alert("Login successfull! ");
      navigate("/");
    } catch {
      console.error(
        "Firebase Authentication Error:",
        error.code,
        error.message
      );
      if (error.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError(error.message);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <form
        className="p-5"
        style={{ maxWidth: "500px" }}
        onSubmit={handleLogin}
      >
        <div className="mb-3">
          <label
            htmlFor="exampleInputEmail1"
            className="form-label text-white "
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text text-white">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label text-white"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            className="form-check-label text-white"
            htmlFor="exampleCheck1"
          >
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LogIn;
