import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [greeting, setGreeting] = useState("");

    const fetchGreeting = () => {
        return new Promise((resolve, reject) => {
            fetch("/api/fetch_greeting", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({})
            })
                .then(response => response.json())
                .then(json => {
                    resolve(json);
            })
            .catch(error => {
                console.log("Could not fetch greeting")
                console.log(error);
                reject(error);
            });
        });
    };  

    const loadData = async () => {
        try {
            var data = await fetchGreeting();
            setGreeting(data.greeting);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="app">
            <h1>{greeting}</h1>
        </div>
    )
};

export default App;