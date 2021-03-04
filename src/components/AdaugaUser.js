import React from 'react';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';

import TextError from './TextError';

import './AdaugaUser.css';

const initialValues = {
    nume: '',
    prenume: '',
    adresa: '',
    telefon: '',
};

const validationSchema = Yup.object({
    nume: Yup.string().required('Camp obligatoriu'),
    prenume: Yup.string().required('Camp obligatoriu'),
    adresa: Yup.string().required('Camp obligatoriu'),
    telefon: Yup.string().required('Camp obligatoriu'),
});

const onSubmit = values => console.log('Form data', values);

const AddUser = () => {

    return (
        <>
            <h2>Adauga User</h2>
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
                        <label htmlFor='adresa'>Adresa</label>
                        <Field type='text' id='adresa' name='adresa' />
                        <ErrorMessage name='adresa' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='telefon'>Telefon</label>
                        <Field type='text' id='telefon' name='telefon' />
                        <ErrorMessage name='telefon' component={TextError} />
                    </div>
                    <Button 
                        variant='primary' 
                        type='submit'
                        id='submitButton'
                        >
                            Adauga
                        </Button>
                </Form>
            </Formik>
        </>
    )
}

export default AddUser;