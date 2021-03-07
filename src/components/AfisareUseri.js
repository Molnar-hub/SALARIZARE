import React from 'react';
import Table from 'react-bootstrap/Table';
import moment from 'moment';

const AfisareUseri = ({angajati}) => {

    return (
        <>
            <h2>Afisare Useri</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nume</th>
                        <th>Prenume</th>
                        <th>Cnp</th>
                        <th>Telefon</th>
                        <th>Functia</th>
                        <th>Data angajare</th>
                        <th>Deducere personala</th>
                        <th>Salar baza</th>
                        
                    </tr>
                </thead>
                {angajati.map((user, index)=> (
                    <tbody key={index}>
                    <tr>
                        <td>{index+1}</td>
                        <td>{user.nume}</td>
                        <td>{user.prenume}</td>
                        <td>{user.cnp}</td>
                        <td>{user.telefon}</td>
                        <td>{user.functia}</td>
                        <td>{moment(user.dataangajare).format('L')}</td>
                        <td>{user.deducerepersonala}</td>
                        <td>{user.salarbaza}</td>
                    </tr>
                    
                </tbody>
                ))}
                
            </Table>
        </>
    )
}

export default AfisareUseri;