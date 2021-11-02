import "./App.scss";
// custom imports
import LoginPage from "./components/LoginPage";
import PasswordPage from "./components/PasswordPage";
import UpgradePage from "./components/UpgradePage";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-100 h-100 page-main-div">
      <BrowserRouter>
        <Route exact path={["/", "login"]} component={LoginPage} />
        <Route exact path="/password" component={PasswordPage} />
        <Route exact path="/upgrade" component={UpgradePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
