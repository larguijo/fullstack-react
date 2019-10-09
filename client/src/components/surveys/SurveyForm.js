import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  { label: "Survey Title", name: "title", required: true },
  { label: "Subject Line", name: "subject", required: true },
  { label: "Email Body", name: "body", required: true },
  { label: "Recipient List", name: "emails", required: true },
];

class SurveyForm extends React.Component {

  renderFields() {
    return FIELDS.map(({ label, name }) =>
      <Field key={`SurveyForm_${name}`} type="text" name={name} label={label} component={SurveyField} />
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button
            type="submit"
            className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  FIELDS.forEach(({ required, name, label }) => {
    if (required && !values[name]) {
      errors[name] = `You must define a value for ${label}`;
    }
  });

  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  validate
})(SurveyForm);