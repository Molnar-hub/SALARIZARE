import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';

import TextError from './TextError';
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

const Coasigurati = () => {

    return (
        <>
            <h2>Coasigurati</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form id='form-salariati'>
                    <div className='form-control'>
                        <label htmlFor='angajat'>Angajat</label>
                        <Field type='text' id='angajat' name='angajat' />
                        <ErrorMessage name='angajat' component={TextError} />
                    </div>
        
                    <div className='form-control'>
                        <label htmlFor='functia'>Functia</label>
                        <Field type='text' id='functia' name='functia' />
                        <ErrorMessage name='functia' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='Numecoasigurat'>Nume coasigurat</label>
                        <Field type='text' id='Numecoasigura' name='Numecoasigura' />
                        <ErrorMessage name='Numecoasigura' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='prenumecoasigurat'>Prenume coasigurat</label>
                        <Field type='text' id='prenumecoasigurat' name='prenumecoasigurat' />
                        <ErrorMessage name='prenumecoasigurat' component={TextError} />
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

export default Coasigurati;