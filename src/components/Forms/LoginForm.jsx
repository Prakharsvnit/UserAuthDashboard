import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import  {LoginFormValidation}  from "../../formValidation/LoginFormValidation";

export default function LoginForm() {
  const loginInitValue = {
    email: "",
    password: "",
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
            height: 600,
            justifyContent: "center",
            textAlign: "center",
            p: 5,
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Login
          </Typography>
          <Formik
            initialValues={loginInitValue}
            validationSchema={LoginFormValidation}
            onSubmit={handleSubmit}
          >
            {(props) => {
              return (
                <Form>
                  <Field
                    required
                    as={TextField}
                    label="Email"
                    type="Email"
                    name="email"
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    helperText={<ErrorMessage name="email" />}
                    error={props.errors.email && props.touched.email}
                  />

                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    helperText={<ErrorMessage name="password" />}
                    error={props.errors.password && props.touched.password}
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
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Container>
    </>
  );
}
