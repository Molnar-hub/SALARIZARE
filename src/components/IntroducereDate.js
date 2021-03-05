import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

import AddUser from './AdaugaUser';
import AfisareUseri from './AfisareUseri';
import Concediu from './Concediumedical';
import Coasigurati from './Coasigurati';


function IntroducereDate() {

    return (
        <>
            <Router>
                <div className="Introducere">
                    <ul>
                        <li>
                            <Link to="/introduceredate/adaugauser">
                                <Button
                                    variant="primary"> Adauga Agajat</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/introduceredate/afisareuseri">
                                <Button variant="primary">Afisare angajati</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/introduceredate/concediu">
                                <Button variant="primary">Concediu medical</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/introduceredate/concediu">
                                <Button variant="primary">Concediu odihna</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/introduceredate/timpdelucru">
                                <Button variant="primary">Timp de lucru</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/introduceredate/coasigurati">
                                <Button variant="primary">Coasigurati</Button>
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
                        <Route path="/introduceredate/concediumedical">
                            <Concediu />
                        </Route>
                        <Route path="/introduceredate/concediuodihna">
                            <Concediu />
                        </Route>
                        <Route path="/introduceredate/coasigurati">
                            <Coasigurati />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    );
}

export default IntroducereDate;