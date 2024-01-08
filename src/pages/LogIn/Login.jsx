import { useForm } from "react-hook-form";
import "./Login.css";

import { useEffect } from "react";
export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {};
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="signUpFormContainer loginContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Login page</h2>
          <div className="inputContainer">
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
              {errors?.email?.type === "required" && (
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
