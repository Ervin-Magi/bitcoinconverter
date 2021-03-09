import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Logo from './BC.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Button, Form, Nav, Navbar} from "react-bootstrap";

function App() {
    return (
        <Router>
            <Navbar style={{ backgroundColor: '#3139E5' }} variant="dark">
                <div className="container">
                    <Navbar.Brand href="/">
                        <img width="234px" height="30px" className="img-responsive" src={Logo}  alt="logo" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/"><span className="material-icons d-inline-block align-top">savings</span></Nav.Link>
                    </Nav>
                    <Form inline>
                        <Nav className="mr-auto">
                            <Nav.Link href="/users"><span className="material-icons d-inline-block align-top">login</span> Kirjaudu sisään</Nav.Link>
                        </Nav>
                        <Button variant="outline-light" href="/users"><span className="material-icons d-inline-block align-top">person_add</span> Rekisteröidy</Button>
                    </Form>
                </div>
            </Navbar>
            <div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <Router>
        </Router>
    );
}

function About() {
    return (
        <Router>
            <div className="container">
                <h2>About</h2>
            </div>
        </Router>
    );
}

function Users() {
    return (
        <Router>
            <div className="container">
                <h2>Users</h2>
            </div>
        </Router>
    );
}


export default App;