import {BrowserRouter as Router} from "react-router-dom"

import {AnimateSharedLayout} from "framer-motion";

import Navigation from "./router"

import "./main.scss"

function App() {

  return (
      <AnimateSharedLayout>
          <Router>
            <Navigation/>
          </Router>
      </AnimateSharedLayout>
  );
}

export default App;
