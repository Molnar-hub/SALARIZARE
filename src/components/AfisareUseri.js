import React from 'react';
import Table from 'react-bootstrap/Table';

const AfisareUseri = () => {

    const userArray = [{nume: 'Cimpean', prenume: 'Cristian', adresa: 'Alba Iulia, Str. Gh. Pop de basesti, nr. 17', telefon: '0754588972'},
                       {nume: 'Raducea', prenume: 'Marius', adresa: 'Alba Iulia, Str. Crizantemelor, nr. 8', telefon: '0444588972'}];

    return (
        <>
            <h2>Afisare Useri</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th>Adresa</th>
                        <th>Telefon</th>
                    </tr>
                </thead>
                {userArray.map((user, index)=> (
                    <tbody>
                    <tr>
                        <td>{index+1}</td>
                        <td>{user.nume}</td>
                        <td>{user.prenume}</td>
                        <td>{user.adresa}</td>
                        <td>{user.telefon}</td>
                    </tr>
                    
                </tbody>
                ))}
                
            </Table>
        </>
    )
}

export default AfisareUseri;