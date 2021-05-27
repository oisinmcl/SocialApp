import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function Navbar() {

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    Oisin's Socal App
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name="Acitivties" />
                <Menu.Item>
                    <Button as={NavLink} to='createActivity' positive content='Create'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}