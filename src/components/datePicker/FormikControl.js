import React from 'react';

import InputText from './inputText';
import DatePicker from './datePicker';
 

const FormikControl = ({control, label, name}) => {
    switch(control){
        case 'input': return <InputText label={label} name={name} />
        case 'date': return <DatePicker label={label} name={name} />
        default: return null;     
    }
}

export default FormikControl;