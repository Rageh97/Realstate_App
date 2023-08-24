import "./index.css";
import Companies from "./components/companies/companies";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contacts/Contact";
import Getstarted from "./components/getstarted/Getstarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="white-gradient"/>
              
          <Header />
          <Hero />
        </div>
        <Companies/>
        <Residencies/>
        <Value/>
        <Contact/>
        <Getstarted/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
