/* eslint-disable */
import React from 'react';
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { RegisterFormValidation } from "../../formValidation/RegisterFormValidation";

export default function LoginForm() {
  const registerInitValue = {
    fullname: "",
    username: "",
    countryId: "",
    mobile: "",
    email: "",
    password: "",
    referral: "",
  };

  const handleSubmit = (values, props) => {
    //console.log(JSON.stringify(values))
    props.resetForm();
  };

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
          <Formik
            initialValues={registerInitValue}
            validationSchema={RegisterFormValidation}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form>
                  <Field
                    required
                    as={TextField}
                    label="Fullname"
                    type="text"
                    name="fullname"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="fullname" />}
                    error={props.errors.fullname && props.touched.fullname}
                  />
                  <Field
                    required
                    as={TextField}
                    label="Username"
                    type="text"
                    name="username"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="username" />}
                    error={props.errors.username && props.touched.username}
                  />
                  <Field
                    required
                    as={TextField}
                    label="Country ID"
                    type="text"
                    name="countryId"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="countryId" />}
                    error={props.errors.countryId && props.touched.countryId}
                  />
                  <Field
                    required
                    as={TextField}
                    label="Mobile"
                    type="text"
                    name="mobile"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="mobile" />}
                    error={props.errors.mobile && props.touched.mobile}
                  />
                  <Field
                    required
                    as={TextField}
                    label="Email ID"
                    type="email"
                    name="email"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="email" />}
                    error={props.errors.email && props.touched.email}
                  />
                  <Field
                    required
                    as={TextField}
                    label="Password"
                    type="password"
                    name="password"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="password" />}
                    error={props.errors.password && props.touched.password}
                  />
                  <Field
                    required
                    as={TextField}
                    label="Referral ID"
                    type="text"
                    name="referral"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="referral" />}
                    error={props.errors.referral && props.touched.referral}
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
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Container>
    </>
  );
}
