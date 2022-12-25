/* eslint-disable*/
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useFormik, Field, FormikProvider } from "formik";
import { LoginFormValidation } from "../../formValidation/LoginFormValidation";
import { userDataActions } from "../../userDataSlice";

export default function LoginForm() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      login_id: "",
      password: "",
    },
    validationSchema: LoginFormValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      const loginData = JSON.stringify(values, null, 2);
      const login_url =
        "https://lobster-app-ddwng.ondigitalocean.app/user/login";
      const options = {
        method: "POST",
        url: login_url,
        headers: {
          "Content-Type": "application/json",
          api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
        },
        data: loginData,
      };
      axios
        .request(options)
        .then((response) => {
          console.log("response", response.data);
          if (response?.data?.status) {
            dispatch(userDataActions.dispatchUserData(response.data.message));
            navigate("/dashboard");
          } else {
            let err = response?.data?.message;
            Object.keys(err).map((key) => setErrorMessage(err[key]));
          }
        })
        .catch((errors) => {
          console.log("error", errors);
        });
      resetForm();
    },
  });

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            height: 600,
            justifyContent: "center",
            textAlign: "center",
            p: 5,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Login
          </Typography>

          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <Field
                required
                as={TextField}
                id="login_id"
                name="login_id"
                label="Login Id"
                type="email"
                fullWidth
                variant="outlined"
                margin="dense"
                value={formik.values.login_id}
                onChange={formik.handleChange}
                error={
                  formik.touched.login_id && Boolean(formik.errors.login_id)
                }
                helperText={formik.touched.login_id && formik.errors.login_id}
              />
              <Field
                required
                as={TextField}
                id="password"
                fullWidth
                variant="outlined"
                name="password"
                label="Password"
                type="password"
                margin="dense"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ mt: 2, height: 60 }}
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </FormikProvider>
        </Box>
      </Container>
      <Typography variant="h4" sx={{ my: 2 }}>
        {errorMessage}
      </Typography>
    </>
  );
}
