import { useForm } from "react-hook-form";
import "./Signup.css";
import { useEffect } from "react";
import axios from "axios";
export const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = async (data) => {
    const findUserByEmail = await axios.get(
      `http://localhost:8800/api/users?email=${data.email}`
    );

    if (findUserByEmail.data.length > 0) {
      alert("email", {
        type: "manual",
        message: "Email already exists",
      });
    } else {
      try {
        await axios.post("http://localhost:8800/api/users", data);
        console.log("User registered successfully");
      } catch (error) {
        console.log(error.message);
      }
    }
    // reset();
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="signUpFormContainer">
        <form onSubmit={handleSubmit(onSubmit)} className="signUpContainer">
          <h2>Signup page</h2>
          <div className="inputContainer">
            <span className="inputParent">
              <label>First Name</label>

              <input
                {...register("firstName", {
                  required: true,
                  maxLength: 20,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.firstName?.type === "required" && (
                <p className="error">This field is required</p>
              )}
              {errors?.firstName?.type === "maxLength" && (
                <p className="error">First name cannot exceed 20 characters</p>
              )}
              {errors?.firstName?.type === "pattern" && (
                <p className="error">Alphabetical characters only</p>
              )}
            </span>
            <span className="inputParent">
              <label>Last Name</label>
              <input
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
              />
              {errors?.lastName?.type === ("pattern" || "required") && (
                <p className="error">Alphabetical characters only</p>
              )}
              {errors?.lastName?.type === "required" && (
                <p className="error">Alphabetical characters only</p>
              )}
            </span>
            <span className="inputParent">
              <label>Enter your Eamil</label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors?.email?.type === "pattern" && (
                <p className="error">Please type a valid email</p>
              )}
              {errors?.firstName?.type === "required" && (
                <p className="error">Please type a valid email</p>
              )}
              <label htmlFor="password">password</label>
              <input
                id="password"
                {...register("password", {
                  required: "required",
                  minLength: {
                    value: 5,
                    message: "min length is 5",
                  },
                })}
                type="password"
              />
              {errors.password && (
                <span role="alert" className="error">
                  <p>{errors.password.message}</p>
                </span>
              )}
            </span>
            <span>
              <label htmlFor="password">Confirm password</label>
              <input
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "required",
                  message: "Password doesn't match",
                  validate: (value) => value === watch("password"),
                  minLength: {
                    vlaue: 5,
                    // value: () => 5,
                    // validate: (value) => value === watch("password"),

                    // validate: false,
                  },
                })}
                type="password"
              />
              {/* {errors.confirmPassword && <p>Passwords do not match.</p>} */}
              {errors.confirmPassword && (
                <span role="alert" className="error">
                  <p>Password does not match</p>
                </span>
              )}
            </span>

            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  );
};
