import { Routes, Route, Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import RestaurantList from './pages/RestaurantList'
import RestaurantDetail from './pages/RestaurantDetail'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow-sm sticky-top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span className="fw-bold text-primary">Restaurante</span>Master
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="pb-5">
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
      </main>

      <footer className="py-4 bg-light mt-auto border-top text-center">
        <Container>
          <p className="mb-0 text-muted">© 2026 Restaurante Master - Geraldine Ramírez Hernández</p>
        </Container>
      </footer>
    </div>
  )
}

export default App
