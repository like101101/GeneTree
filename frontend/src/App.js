import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from './components/Footer';
import Header from './components/Header'
import PatientRegisterScreen from './screens/patient/PatientRegisterScreen';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import RegisterScreem from "./screens/RegisterScreen";
import PatientHomeScreen from "./screens/patient/PatientHomeScreen";
import PhysicianHomeScreen from "./screens/physician/PhysicianHomeScreen";
import PhysicianRegisterScreen from "./screens/physician/PhysicianRegisterScreen";
import PatientProfileScreen from "./screens/patient/PatientProfileScreen";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-5 bg-primary">
        <Container>
          <Routes>
            <Route path='' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreem />} />
            <Route path='/register/patient' element={<PatientRegisterScreen />} />
            <Route path='/register/physician' element={<PhysicianRegisterScreen />} />
            <Route path='/patient' element={<PatientHomeScreen />} />
            <Route path='/patient/profile' element={<PatientProfileScreen />} />
            <Route path='/physician' element={<PhysicianHomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;