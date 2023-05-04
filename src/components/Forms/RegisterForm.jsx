import React, { useState } from "react";
import axios from "axios";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik, Field, FormikProvider } from "formik";
import { RegisterFormValidation } from "../../formValidation/RegisterFormValidation";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      full_name: "",
      username: "",
      country_row_id: "",
      mobile_number: "",
      email_id: "",
      password: "",
      referral: "",
    },
    validationSchema: RegisterFormValidation,
    onSubmit: (values, { resetForm }) => {
      const registerData = JSON.stringify(values, null, 2);
      const register_url =
        "https://lobster-app-ddwng.ondigitalocean.app/user/register";

      const options = {
        method: "POST",
        url: register_url,
        headers: {
          api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          "Content-Type": "application/json",
        },
        data: registerData,
      };

      axios
        .request(options)
        .then((response) => {
          if (response?.data?.status) {
            navigate("/login");
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
            justifyContent: "center",
            textAlign: "center",
            p: 5,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Register
          </Typography>

          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <Field
                required
                as={TextField}
                id="full_name"
                name="full_name"
                label="Fullname"
                type="text"
                fullWidth
                variant="outlined"
                margin="dense"
                value={formik.values.full_name}
                onChange={formik.handleChange}
                error={
                  formik.touched.full_name && Boolean(formik.errors.full_name)
                }
                helperText={formik.touched.full_name && formik.errors.full_name}
              />
              <Field
                required
                as={TextField}
                id="username"
                name="username"
                label="Username"
                type="text"
                fullWidth
                variant="outlined"
                margin="dense"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <Field
                required
                as={TextField}
                id="country_row_d"
                name="country_row_id"
                label="Country ID"
                type="text"
                fullWidth
                variant="outlined"
                margin="dense"
                value={formik.values.country_row_id}
                onChange={formik.handleChange}
                error={
                  formik.touched.country_row_id &&
                  Boolean(formik.errors.country_row_id)
                }
                helperText={
                  formik.touched.country_row_id && formik.errors.country_row_id
                }
              />
              <Field
                required
                as={TextField}
                id="mobile_number"
                name="mobile_number"
                label="Mobile"
                type="text"
                fullWidth
                variant="outlined"
                margin="dense"
                value={formik.values.mobile_number}
                onChange={formik.handleChange}
                error={
                  formik.touched.mobile_number &&
                  Boolean(formik.errors.mobile_number)
                }
                helperText={
                  formik.touched.mobile_number && formik.errors.mobile_number
                }
              />
              <Field
                required
                as={TextField}
                id="email_id"
                name="email_id"
                label="Email ID"
                type="email"
                fullWidth
                variant="outlined"
                margin="dense"
                value={formik.values.email_id}
                onChange={formik.handleChange}
                error={
                  formik.touched.email_id && Boolean(formik.errors.email_id)
                }
                helperText={formik.touched.email_id && formik.errors.email_id}
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
              <Field
                as={TextField}
                disabled
                name="referral"
                label="Referral ID"
                type="text"
                fullWidth
                id="outlined-disabled"
                margin="dense"
                value=""
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ mt: 2, height: 60 }}
                color="primary"
                fullWidth
              >
                Register
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
