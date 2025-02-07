import { useState } from "react";
import { signUp } from "../../firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/slices/authSlice";
import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      dispatch(loginSuccess(user));

      alert("User signed up successfully!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-5 d-flex justify-content-center">
      <div>
        <h2 className="text-white">Sign Up</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSignUp}>
          <label htmlFor="emailLabel" className="form-label text-white ">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            id="emailLabel"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="mb-3">
            <label htmlFor="passwordLabel" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              id="passwordLabel"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
