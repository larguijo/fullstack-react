import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = formFields.map(({ label, name }) =>
    <div key={`SurveyReview_${name}`}>
      <label>{label}</label>
      <div style={{ marginBottom: '5px' }}>{formValues[name]}</div>
    </div>);

  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        {reviewFields}
      </div>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}>Back</button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitSurvey(formValues)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  const { form: { surveyForm: { values } } } = state;
  return {
    formValues: values
  };
}

export default connect(mapStateToProps, actions)(SurveyReview);