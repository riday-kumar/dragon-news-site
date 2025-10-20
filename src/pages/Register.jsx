import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [nameError, setNameError] = useState("");
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ name, photo, email, password });

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            // console.log(error.message);
            setUser(user);
          });

        form.reset();
        toast.success("Account Created Successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5 ">
          <h2 className="text-2xl text-center font-semibold">Register</h2>
          <div className="card-body">
            <form onSubmit={handleRegisterForm}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input mb-3"
                  placeholder="Your Name"
                />
                {nameError && (
                  <p className="text-red-500 font-bold mb-3">{nameError}</p>
                )}
                {/* photo */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photo"
                  className="input mb-3"
                  placeholder="Photo URL"
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input mb-3"
                  placeholder="Email"
                />
                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input mb-3"
                  placeholder="Password"
                />

                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
                <p className="text-center font-bold pt-3">
                  Already Have An Account ?{" "}
                  <Link to="/auth/login" className="text-secondary">
                    Login
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

export default Register;
