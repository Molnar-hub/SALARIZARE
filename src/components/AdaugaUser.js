import React from 'react';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import {uniqueId} from 'lodash';

import Api from './utils/api';

import TextError from './TextError';
import DatePicker from './datePicker/datePicker';
import {VALIDATION} from './utils/utils';
import {REFRESH_KEY} from './utils/constants';

import './AdaugaUser.css';
import 'react-datepicker/dist/react-datepicker.css';

const initialValues = {
    nume: '',
    prenume: '',
    cnp: '',
    telefon: '',
    functia: '',
    dataangajare: new Date(),
    deducerepersonala: '',
    salarbaza: '',
    
};

const validationSchema = Yup.object({
    nume: Yup.string().required(VALIDATION.field),
    prenume: Yup.string().required(VALIDATION.field),
    cnp: Yup.string().required(VALIDATION.field),
    telefon: Yup.string().required(VALIDATION.field),
    functia: Yup.string().required(VALIDATION.field),
    dataangajare: Yup.date().required(VALIDATION.field),
    deducerepersonala: Yup.string().required(VALIDATION.field),
    salarbaza: Yup.number()
                    .typeError(VALIDATION.typeError)
                    .positive(VALIDATION.positive)
                    .required(VALIDATION.field)
});

const AddUser = ({setRefreshKey}) => {

    const onSubmit = async (values) => {
        values.salarbaza=parseFloat(values.salarbaza);
        await Api.post('/angajati', values);
        setRefreshKey(uniqueId(REFRESH_KEY));
    }; 

    return (
        <>
            <h2>Adauga Angajat</h2>
           
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            > 
                <Form id='form-salariati'>
                    <div className='form-control'>
                        <label htmlFor='nume'>Nume</label>
                        <Field type='text' id='nume' name='nume' />
                        <ErrorMessage name='nume' component={TextError} />
                    </div>
        
                    <div className='form-control'>
                        <label htmlFor='prenume'>Prenume</label>
                        <Field type='text' id='prenume' name='prenume' />
                        <ErrorMessage name='prenume' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='cnp'>Cnp</label>
                        <Field type='text' id='cnp' name='cnp' />
                        <ErrorMessage name='cnp' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='telefon'>Telefon</label>
                        <Field type='text' id='telefon' name='telefon' />
                        <ErrorMessage name='telefon' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='functia'>Functia</label>
                        <Field type='text' id='functia' name='functia' />
                        <ErrorMessage name='functia' component={TextError} />
                    </div>
                    <DatePicker label='Data angajare' name='dataangajare' />
                    <div className='form-control'>
                        <label htmlFor='deducerepersonala'>Deducere personala</label>
                        <Field type='text' id='deducerepersonala' name='deducerepersonala' />
                        <ErrorMessage name='deducerepersonala' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='salarbaza'>Salar baza</label>
                        <Field type='text' id='salarbaza' name='salarbaza' />
                        <ErrorMessage name='salarbaza' component={TextError} />
                    </div>
                    <Button 
                        variant='primary' 
                        type='submit'
                        id='submitButton'
                        >
                            Adauga angajat
                        </Button>
                </Form>
            </Formik>
        </>
    )
}

export default AddUser;