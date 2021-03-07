const getInputName = string => {
    const path = string.path;

    return path.charAt(0).toUpperCase() + path.slice(1);
};
  
export const VALIDATION = {
    field: fieldName => `${getInputName(fieldName)} este un câmp obligatoriu`,
    typeError: 'Salariul de baza trebuie sa fie un numar',
    positive: 'Salariul de baza trebuie sa fie mai mare ca zero'  
};