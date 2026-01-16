// frontend/src/App.jsx
import { useEffect, useState } from "react";
function App() {
    const [msg, setMsg] = useState("");
    useEffect(() => {
        fetch("http://backend:5000/api/saludo")
            .then(res => res.json())
            .then(data => setMsg(data.mensaje))
            .catch(console.error);
    }, []);
    return (
        <div>
            <h1>Frontend React + Vite</h1>
            <p>Mensaje desde backend: {msg}</p>
        </div>
    );
}
export default App;