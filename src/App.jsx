import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );
      setUser(response.data.results[0]);
    };

    fetchData();
  });

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gradient-to-r from-gray-900 to-gray-400 ">
      {user ? (
        <div className="flex items-center bg-zinc-400 p-5 rounded-2xl">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-36 h-36 rounded-lg border-hidden"
          />

          <div className="ml-5">
            <h2 className="text-4xl text-gray-800 font-semibold font-mono ">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-800 ">Gender: {user.gender}</p>
            <p className="text-gray-800 ">Phone: {user.phone}</p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-xl">Loading...</p>
      )}
    </div>
  );
}

export default App;
