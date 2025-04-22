import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ValidationShema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("invalid Email Address").required("Email is required"),
  password: yup.string().required("Password is required").min(7, "Minimum password length is 7"),
});
const ReactHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(ValidationShema)});
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="myform bg-white"
      >
        <h1 className="text-yellow-500">Submit Your Details</h1>
        <p className="text-red-500">
          {errors.firstName && errors.firstName.message}
        </p>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.firstName ? "border border-red-600" : ""
          }`}
          placeholder="First Name"
          {...register("firstName")}
        />
        <p className="text-red-500">
          {errors.lastName && errors.lastName.message}
        </p>
        <input
          type="text"
          className={`input mt-2 w-full ${
            errors.lastName ? "border border-red-600" : ""
          }`}
          placeholder="Last Name"
          {...register("lastName")}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>
        <input
          type="email"
          className={`input mt-2 w-full ${
            errors.email ? "border border-red-600" : ""
          }`}
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-red-500">{errors.password && errors.password.message}</p>
        <input
          type="password"
          className={`input mt-2 w-full ${
            errors.lastName ? "border border-red-600" : ""
          }`}
          placeholder="Password"
          {...register("password")}
        />
        <button type="submit" className="btn btn-accent w-full mt-2.5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReactHook;
