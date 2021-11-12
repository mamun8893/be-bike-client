import { Grid } from "@material-ui/core";
import React, { useState } from "react";

import swal from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleBlur = (e) => {
    const email = e.target.value;
    console.log(email);
    setEmail(email);
  };
  const handleSubmit = (e) => {
    const user = { email };
    fetch("https://hidden-castle-03944.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        swal("Good Job!", "Successfully Make Admin", "success");
      });

    e.preventDefault();
  };
  return (
    <div className="login-register-box-warper">
      <Grid container spacing={0} justifyContent="center">
        <Grid item md={6}>
          <div className="title text-center">
            <h2>Make a Admin</h2>
            <div className="login-register-warper">
              <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input onBlur={handleBlur} type="email" name="email" />
                <input type="submit" value="submit" className="default-btn" />
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MakeAdmin;
