import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form'
import {addFilm} from '../actions';

/* const FormContainer = ({addFilm}) => (
 *     <Form addFilm={addFilm}></Form>
 * );*/

const mapDispatchToProps = (dispatch, ownProps) => ({
  addFilm: (data) => {
    dispatch(addFilm(data))
  }
})

export default connect(null, mapDispatchToProps)(Form);
