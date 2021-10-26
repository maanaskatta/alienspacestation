import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import { useEffect, useState } from "react";
import Manager from "./pages/Manager";
import Technician from "./pages/Technician";
import Resident from "./pages/Resident";

function App() {
  const [currentRole, setCurrentRole] = useState(
    localStorage.getItem("role") ? localStorage.getItem("role") : ""
  );

  return (
    <Switch>
      <Route
        path="/login"
        component={() => <LoginPage setCurrentRole={setCurrentRole} />}
      />
      {currentRole === "manager" ? (
        <Route path="/manager" component={() => <Manager />} />
      ) : currentRole === "technician" ? (
        <Route path="/technician" component={() => <Technician />} />
      ) : currentRole === "resident" ? (
        <Route path="/resident" component={() => <Resident />} />
      ) : (
        <Redirect to="/login" />
      )}
      <Redirect to="/login" />
    </Switch>
  );
}

export default App;
