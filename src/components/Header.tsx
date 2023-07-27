import * as React from 'react';
import { Navbar, Container } from 'react-bootstrap';

export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <Navbar variant='dark' bg='dark'>
        <Container>
          <Navbar.Brand>Notes App</Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
