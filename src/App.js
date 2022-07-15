import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./Layout/Header";
import { RouteComponent } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RouteComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
