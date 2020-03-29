import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";

const MainForm = ({ status, errors, touched, getInput }) => {
  useEffect(() => {
    status && getInput(status);
  }, [status, getInput]);
  return (
    <Form>
      <label htmlFor="recipe">
        <Field
          type="text"
          name="recipe"
          id="recipe"
          placeholder="Search for recipe"
        />
        {errors.recipe && touched.recipe && (
          <p className="error">{errors.recipe}</p>
        )}
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
    setStatus(values);
    resetForm();
  }
})(MainForm);
