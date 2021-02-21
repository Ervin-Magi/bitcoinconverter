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
import {
    Label,
    Select
} from '@rebass/forms'
import {Button, Form, Nav, Navbar} from "react-bootstrap";
import {Box} from "@material-ui/core";
import {Flex} from "rebass";

function App() {
    return (
        <Router>
            <Navbar style={{ backgroundColor: '#3139E5' }} variant="dark">
                <Navbar.Brand href="#home">
                    <img width="234px" height="30px" className="img-responsive" src={Logo}  alt="logo" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/"><span className="material-icons d-inline-block align-top">savings</span> Home</Nav.Link>
                    <Nav.Link href="/about"><span className="material-icons d-inline-block align-top">savings</span> About</Nav.Link>
                    <Nav.Link href="/users">
                        <span className="material-icons d-inline-block align-top">home</span> Users</Nav.Link>
                </Nav>
                <Form inline>
                    <Nav className="mr-auto">
                        <Nav.Link href="/"><span className="material-icons d-inline-block align-top">login</span> Kirjaudu sisään</Nav.Link>
                    </Nav>
                    <Button variant="outline-light" href="/users"><span className="material-icons d-inline-block align-top">person_add</span> Rekisteröidy</Button>
                </Form>
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
        <div className="container">
            <h2>Home</h2>
            <form action = '/' method = 'post'>
            <Box
                as='form'
                onSubmit={e => e.preventDefault()}
                py={22}>
                <Flex mx={120} mb={3}>
                    <Box width={1/2} px={2}>
                        <Label htmlFor='kryptovaluutta'>Kryptovaluutta</Label>
                        <Select name = 'crypto'
                                id='crypto'
                                defaultValue='BTC'>
                            <option value = 'BTC'>BitCoin - ₿</option>
                            <option value = 'ETH'>Ethereum - Ξ</option>
                            <option value = 'LTC'>Litecoins - Ł</option>
                        </Select>
                    </Box>
                    <Box width={1/2} px={2}>
                        <Label htmlFor='valuutta'>Valuutta</Label>
                        <Select name = 'fiat'
                            id='fiat'
                            defaultValue='EUR'>
                                <option value = 'USD'>USD - $</option>
                                <option value = 'EUR'>EUR - €</option>
                                <option value = 'GBP'>GBP - £</option>
                        </Select>
                    </Box>
                </Flex>
                <Flex mx={120} flexWrap='wrap'>
                    <Box px={2} ml='auto'>
                        <Button type="submit" name="button">Muuntaa</Button>
                    </Box>
                </Flex>
            </Box>
            </form>

        </div>
        <footer className="new_footer_area">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <ul>
                                <li>
                                    <Nav.Link href="/users"><span className="material-icons d-inline-block align-top">history</span> Historia</Nav.Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <ul>
                                <li>
                                    <Nav.Link href="/users"><span className="material-icons d-inline-block align-top">star_rate</span> Tallennettu</Nav.Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p>© 2021 Bitcoin converter. Kaikki oikeudet pidätetään.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p>Made with ❤️</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
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
