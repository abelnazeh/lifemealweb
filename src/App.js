import "./App.css";
import loginComponent from "./components/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePageComponent from "./components/Homepage";
import SignUpComponent from "./components/SignUp";
import ContactPageComponent from "./components/ContactPage";
import AboutPageComponent from "./components/AboutPage";
import FAQPageComponent from "./components/FAQPage";
import TermsAndConditionsComponent from "./components/TermsAndConditionsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePageComponent} />
          <Route path="/about" component={AboutPageComponent} />
          <Route path="/login" component={loginComponent} />
          <Route path="/sign-up" component={SignUpComponent} />
          <Route path="/contact" component={ContactPageComponent} />
          <Route path="/faq" component={FAQPageComponent} />
          <Route
            path="/terms-and-condition"
            component={TermsAndConditionsComponent}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
