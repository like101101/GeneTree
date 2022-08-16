import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from './components/Footer';
import Header from './components/Header'
import PatientRegisterScreen from './screens/patient/PatientRegisterScreen';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-5 bg-primary">
        <Container>
          <Routes>
            <Route path='' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/patient/register' element={<PatientRegisterScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;