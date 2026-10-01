import { useEffect, useState } from "react";
import api from "../services/api";

function ApiTest() {
  const [message, setMessage] = useState("Connecting to backend...");
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/api/test")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((err) => {
        console.error(err);
        setError("Could not connect to FastAPI.");
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Backend Connection Test</h2>

      {error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <p className="text-success">{message}</p>
      )}
    </div>
  );
}

export default ApiTest;