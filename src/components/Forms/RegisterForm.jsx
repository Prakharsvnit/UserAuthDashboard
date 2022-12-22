/* eslint-disable */
import React from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useFormik, Field, FormikProvider,Form } from "formik";
import { RegisterFormValidation } from "../../formValidation/RegisterFormValidation";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      countryId: "",
      mobile: "",
      email: "",
      password: "",
      referral: "",
    },
    validationSchema: RegisterFormValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
              id="fullname"
              name="fullname"
              label="Fullname"
              type="text"
              fullWidth
              variant="outlined"
              margin="dense"
              value={formik.values.fullname}
              onChange={formik.handleChange}
              error={formik.touched.fullname && Boolean(formik.errors.fullname)}
              helperText={formik.touched.fullname && formik.errors.fullname}
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
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <Field
              required
              as={TextField}
              id="countryId"
              name="countryId"
              label="Country ID"
              type="text"
              fullWidth
              variant="outlined"
              margin="dense"
              value={formik.values.countryId}
              onChange={formik.handleChange}
              error={
                formik.touched.countryId && Boolean(formik.errors.countryId)
              }
              helperText={formik.touched.countryId && formik.errors.countryId}
            />
            <Field
              required
              as={TextField}
              id="mobile"
              name="mobile"
              label="Mobile"
              type="text"
              fullWidth
              variant="outlined"
              margin="dense"
              value={formik.values.mobile}
              onChange={formik.handleChange}
              error={formik.touched.mobile && Boolean(formik.errors.mobile)}
              helperText={formik.touched.mobile && formik.errors.mobile}
            />
            <Field
              required
              as={TextField}
              id="email"
              name="email"
              label="Email ID"
              type="email"
              fullWidth
              variant="outlined"
              margin="dense"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              error={formik.touched.password && Boolean(formik.errors.password)}
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
    </>
  );
}
