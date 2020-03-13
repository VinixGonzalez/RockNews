import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import MenuItems from './MenuItems';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { withRouter } from 'react-router-dom';

import './styles.css';

import Logo from '../../assets/rocklogo.png';

class MenuSuperior extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            termo: '',
        }
    }

    _handleChangeBuscaNoticia = ({ target: { value } }) => this.setState({ termo: value });

    _handleSubmitBuscaNoticia = evento => {

        evento.preventDefault();
        const { termo } = this.state;

        if (!termo) {
            NotificationManager.info('Insira um termo para buscar a notícia!');
            return;
        }

        this.props.history.push(`/busca/${termo}`);
    }


    render() {



        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Navbar.Brand href="/geral" className="logo" >

                    <img height={40} src={Logo} alt="logo" />
                    <span>Rock News</span>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="mt-3 d-flex menu" >

                        <MenuItems />

                        <Form className={`d-flex ${window.innerWidth < 992 && "mt-3"}`} onSubmit={this._handleSubmitBuscaNoticia}>
                            <Form.Control
                                type="text"
                                placeholder="Buscar notícia"
                                style={{ width: "200px" }}
                                onChange={this._handleChangeBuscaNoticia}
                            />
                            <Button type="submit" className="ml-2" variant="dark" >Buscar</Button>
                        </Form>

                    </Nav>

                </Navbar.Collapse>

                <NotificationContainer />

            </Navbar>
        )
    }

}


export default withRouter(MenuSuperior);

