import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Berita from "./components/Berita";
import Beranda from "./components/Beranda";
import CreateBarang from "./components/Artikel";
import Tampilkan from "./components/Tampilkan";

function App() {
  return (
    <div>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>BPBD Kabupaten Mesuji</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
               <LinkContainer to="/">
                  <Nav.Link>Beranda</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/barang">
                  <Nav.Link>Berita</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/createbarang">
                  <Nav.Link>Artikel</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Beranda} />
          <Route path="/berita" component={Berita} />
          <Route path="/artikel" component={Tampilkan} />
          {/* <Route path="/update/:id" component={} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;