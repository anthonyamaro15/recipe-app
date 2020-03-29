import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const MainForm = () => {
  return (
    <Form>
      <label htmlFor="recipe">
        <Field type="text" name="recipe" id="recipe" />
      </label>
      <button type="submit">Search</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    recipe: ""
  }),
  validationSchema: yup.object().shape({
    recipe: yup.string().required("Input field cannot be empty")
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    console.log(values);

    resetForm();
  }
})(MainForm);
