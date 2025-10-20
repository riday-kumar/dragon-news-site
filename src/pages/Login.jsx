import React, { use, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setUser } = use(AuthContext);

  const navigate = useNavigate();

  const { state } = useLocation();
  // console.log(state);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // form.reset();
        toast.success("Logged In Successfully");
        if (state) {
          navigate(state);
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5 ">
          <h2 className="text-2xl text-center font-semibold">
            Login your account
          </h2>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              {error ? (
                <p className="text-red-500 font-bold mb-3">{error}</p>
              ) : (
                ""
              )}
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input mb-3"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input mb-3"
                  placeholder="Password"
                  required
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
                <p className="text-center font-bold pt-3">
                  Don't Have An Account ?{" "}
                  <Link to="/auth/register" className="text-secondary">
                    Register
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
