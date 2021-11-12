import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { Grid } from "@material-ui/core";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("https://hidden-castle-03944.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        reset();
        swal("Good Job!", "Successfully Add Review", "success");
      });
  };
  return (
    <div className="login-register-box-warper pt-0">
      <Grid container spacing={0}>
        <Grid item md={6}>
          <div className="title text-center">
            <h2>Add Review</h2>
            <div className="login-register-warper">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name</label>
                <input
                  defaultValue={user.displayName}
                  {...register("userName")}
                />
                <label htmlFor="">Image URl</label>
                <input {...register("image")} />
                <label htmlFor="">Rating</label>
                <input type="number" {...register("rating")} />
                <label htmlFor="">Description</label>
                <textarea {...register("description")} />
                <input type="submit" value="submit" className="default-btn" />
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Review;
