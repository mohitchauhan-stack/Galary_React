import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [userData, setUserData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${pageIndex}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [pageIndex]);

  let printUserData = (
    <h3 className="absolute top-1/2 left-1/2 ">Loading...</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((data, idx) => {
      return (
        <div key={idx}>
          <Card data={data} />
        </div>
      );
    });
  }

  return (
    <div className="h-screen">
      <div className="m-4 flex flex-wrap gap-6 h-[80%] bg-neutral-200">
        {printUserData}
      </div>

      <div className="flex justify-center w-full gap-8 items-center">
        <button
          style={{ opacity: pageIndex == 1 ? 0.5 : 1 }}
          className="px-3 py-1 bg-neutral-400 text-amber-50 rounded-xl cursor-pointer active:scale-95"
          onClick={() => {
            if (pageIndex > 1) {
              setPageIndex(pageIndex - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>

        <h4>Page {pageIndex}</h4>

        <button
          className="px-3 py-1 bg-neutral-400 text-amber-50 rounded-xl cursor-pointer active:scale-95"
          onClick={() => {
            setPageIndex(pageIndex + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
