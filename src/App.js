import Users from "./Users";
import "./App.css";
import { useState } from "react";
import UserDetails from "./userDetails";

function App() {
  const [userId, setUserId] = useState(); //selected user
  return (
    <div className="App">
      <div className="App-header">
        <h1>Learn React Query</h1>
      </div>
      <div className="main">
        <div
          style={{ padding: 20, width: "30%", borderRight: "2px solid white" }}
        >
          <Users setUserId={setUserId} />
        </div>
        <div style={{ padding: 20, width: "70%" }}>
          <UserDetails userId={userId} />
        </div>
      </div>
    </div>
  );
}

export default App;
