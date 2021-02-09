import {BrowserRouter as Router} from "react-router-dom"

import {AnimateSharedLayout} from "framer-motion";

import Navigation from "./router"
import Container from "./components/Container";

import "./main.scss"

function App() {

  return (
      <AnimateSharedLayout>
          <Router>
              <Container>
                <Navigation/>
              </Container>
          </Router>
      </AnimateSharedLayout>
  );
}

export default App;
