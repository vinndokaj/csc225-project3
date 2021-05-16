import "bootstrap/dist/css/bootstrap.min.css";
import Consoles from "./components/Consoles";

function App() {
  return (
    <>
      <nav className="navbar navbar-light bg-light" id="nav">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Consoles R Us</span>
        </div>
      </nav>
      <div className="container mt-2">
        <Consoles />
      </div>
    </>
  );
}

export default App;
