import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
useState;

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <b>World</b>
        </Alert>
      )}
      <Button color="primary" onClick={() => console.log(setAlertVisibility(true))}>
        Click motherfucker
      </Button>
    </div>
  );
}

export default App;
