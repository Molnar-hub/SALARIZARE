import React from 'react';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';

import TextError from './TextError';

import './AdaugaUser.css';

const initialValues = {
    nume: '',
    prenume: '',
    cnp: '',
    telefon: '',
    functia: '',
    dataangajare: '',
    deducerepersonala: '',
    salarbaza: '',
    
};

const validationSchema = Yup.object({
    nume: Yup.string().required('Camp obligatoriu'),
    prenume: Yup.string().required('Camp obligatoriu'),
    cnp: Yup.string().required('Camp obligatoriu'),
    telefon: Yup.string().required('Camp obligatoriu'),
    functia: Yup.string().required('Camp obligatoriu'),
    dataangajare: Yup.string().required('Camp obligatoriu'),
    deducerepersonala: Yup.string().required('Camp obligatoriu'),
    salarbaza: Yup.string().required('Camp obligatoriu'),
    

});

const onSubmit = values => console.log('Form data', values);

const AddUser = () => {

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
                        <Field type='text' id='functia' name='fuctia' />
                        <ErrorMessage name='functia' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='dataangajare'>Data angajare</label>
                        <Field type='text' id='dataangajare' name='dataangajare' />
                        <ErrorMessage name='dataangajare' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='deducerepersonala'>Deducere personala</label>
                        <Field type='text' id='deducerepersonal' name='deducerepersonal' />
                        <ErrorMessage name='deducerepersonal' component={TextError} />
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
                            Adauga
                        </Button>
                </Form>
            </Formik>
        </>
    )
}

export default AddUser;