import React from 'react';

import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import {uniqueId} from 'lodash';

import Api from './utils/api';

import FormikControl from './datePicker/FormikControl';
import {VALIDATION} from './utils/utils';
import {REFRESH_KEY} from './utils/constants';

import './AdaugaUser.css';

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

    const onSubmit = async (values, onSubmitProps) => {
        values.salarbaza=parseFloat(values.salarbaza);
    
        await Api.post('/angajati', values);
        setRefreshKey(uniqueId(REFRESH_KEY));
        onSubmitProps.resetForm();
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
                    <FormikControl control='input' label='Nume' name='nume' />
                    <FormikControl control='input' label='Prenume' name='prenume' />
                    <FormikControl control='input' label='CNP' name='cnp' />
                    <FormikControl control='input' label='Telefon' name='telefon' />
                    <FormikControl control='input' label='Functia' name='functia' />
                    <FormikControl control='date' label='Data angajare' name='dataangajare' />
                    <FormikControl control='input' label='Deducere personala' name='deducerepersonala' />
                    <FormikControl control='input' label='Salar baza' name='salarbaza' />
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