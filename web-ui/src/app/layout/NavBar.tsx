import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';


export default function Navbar() {

    const { activityStore } = useStore();

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
                    Oisin's Socal App
                </Menu.Item>
                <Menu.Item name="Acitivties" />
                <Menu.Item>
                    <Button onClick={() => activityStore.openForm()} positive content='Create'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}