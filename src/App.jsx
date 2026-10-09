import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  return (
    <div>
      <button onClick={getData} className="p-4 bg-neutral-200 rounded-2xl">
        Get Data{" "}
      </button>

      {data.map((data, idx) => {
        return <h3 key={idx}> {data.author}</h3>;
      })}
    </div>
  );
}

export default App;
