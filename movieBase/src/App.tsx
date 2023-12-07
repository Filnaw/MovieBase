import Button from "./components/Button";
import Alert from "./components/alert";


function App() {
  return (
    <div>
      <Alert>
        Hello <b>World</b>
      </Alert>
      <Button color="primary" onClick={() => console.log('Clicked')}>
        Click motherfucker
      </Button>
    </div>
  );
}

export default App;
