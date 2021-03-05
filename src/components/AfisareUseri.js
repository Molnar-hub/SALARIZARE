import React from 'react';
import Table from 'react-bootstrap/Table';

const AfisareUseri = () => {

    const userArray = [{nume: 'Cimpean', 
                        prenume: 'Cristian', 
                        cnp: '1751254987541', 
                        telefon: '0754588972',
                        functia:'montator',
                        dataangajare:'02.10.2000',
                        deducerepersonala:'410',
                        salarbaza:'2323',
         },
                       {nume: 'Raducea', 
                       prenume: 'Marius', 
                       cnp: '1235647965124', 
                       telefon: '0444588972',
                       functia:'montator',
                       dataangajare:'02.10.2000',
                       deducerepersonala:'410',
                       salarbaza:'2323',
                    }];

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
                {userArray.map((user, index)=> (
                    <tbody>
                    <tr>
                        <td>{index+1}</td>
                        <td>{user.nume}</td>
                        <td>{user.prenume}</td>
                        <td>{user.cnp}</td>
                        <td>{user.telefon}</td>
                        <td>{user.functia}</td>
                        <td>{user.dataangajare}</td>
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