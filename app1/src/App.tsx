import Cookies from "universal-cookie";
import { CheckboxForm } from "./components/CheckboxForm";

function App() {
  const userToken = localStorage.getItem("userToken");
  const cookies = new Cookies();
  const cookiesToken = cookies.get("token");

  return (
    <div className="App">
      <h2>Product Page</h2>
      <p>{userToken}</p>
      <div>
        <p>token from cookies:</p>
        {cookiesToken}
      </div>

      <CheckboxForm />
    </div>
  );
}

export default App;
