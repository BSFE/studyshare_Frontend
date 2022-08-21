import React from "react";
import { useForm } from "react-hook-form";
import { SingUp } from "./style";

const signup = () => {
  const { register, watch, errors } = useForm();
  
  return (
    <div css={SingUp}>
      <h2>회원가입</h2>
      <form
      // onSubmit={handleSubmit((data) => {
      //   alert(JSON.stringify(data));
      // })}
      >
        <label>Example</label>
        <input defaultValue="test" />
        <label>ExampleRequired</label>
        <input
        // {...register("exampleRequired", { required: true, maxLength: 10 })}
        />
        {/* {errors.exampleRequired && <p>This field is required</p>} */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default signup;
