import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import AddUser from './AdaugaUser';
import AfisareUseri from './AfisareUseri';

const IntroducereDate = () => {

    return (
        <>
        <Router>
            <div className="Introducere">
            <ul>
                <li>
                    <Link to="/introduceredate/adaugauser">
                        <Button 
                            variant="primary"
                        >   
                        Adauga User
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/introduceredate/afisareuseri">
                        <Button variant="primary">Afisare Useri</Button>
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route path="/introduceredate/adaugauser">
                    <AddUser />
                </Route>
                <Route path="/introduceredate/afisareuseri">
                    <AfisareUseri />
                </Route>
            </Switch>
        </div>
        </Router>
        </>
    )
}

export default IntroducereDate;