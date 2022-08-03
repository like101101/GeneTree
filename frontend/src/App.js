import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from './components/Footer';
import Header from './components/Header'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-5 bg-primary">
        <Container>
          <Routes>
            <Route path='' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;