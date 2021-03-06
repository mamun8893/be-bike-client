import { Grid } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddBike = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://hidden-castle-03944.herokuapp.com/bikes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        swal("Good Job!", "Successfully Add Product", "success");
        reset();
      });
  };
  return (
    <div>
      <div className="login-register-box-warper pt-0 main-card">
        <Grid container spacing={0} justifyContent="center">
          <Grid item lg={6} md={8} sm={8} xs={12}>
            <div className="title text-center pt-4">
              <h4>Add Bike</h4>
              <div className="login-register-warper">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="">Product Name</label>
                  <input {...register("productName")} />
                  <label htmlFor="">Image URl</label>
                  <input {...register("image")} />
                  <label htmlFor="">Price</label>
                  <input {...register("price")} />
                  <label htmlFor="">Description</label>
                  <textarea {...register("description")} />
                  <input type="submit" value="submit" className="default-btn" />
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddBike;
