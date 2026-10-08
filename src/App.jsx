import axios from "axios";
import "./App.css";

function App() {
  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    console.log(response);
  };

  return (
    <div>
      <button onClick={getData} className="p-4 bg-neutral-200 rounded-2xl">
        Get Data{" "}
      </button>
    </div>
  );
}

export default App;
