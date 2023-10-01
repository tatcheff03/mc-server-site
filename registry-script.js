document.addEventListener("DOMContentLoaded", function () {
    console.log("Registry page loaded."); // Check if this message appears in the console

    const registryLog = document.getElementById("registryLog");

    function addToRegistryLog(action) {
        const entry = document.createElement("div");
        entry.classList.add("registry-entry");
        entry.textContent = action;
        registryLog.appendChild(entry);

        // Save the action to localStorage
        const actions = JSON.parse(localStorage.getItem("actions")) || [];
        actions.push({ action, timestamp: new Date().toLocaleString() });
        localStorage.setItem("actions", JSON.stringify(actions));
    }
     // Listen for messages from the server page
     window.addEventListener("message", function (event) {
        if (event.data.type === "serverAction") {
            console.log("Received message from server:", event.data);
            addToRegistryLog(`Server ${event.data.action}`);
        }
    });

    // Retrieve actions from localStorage and populate the registry log
    const actions = JSON.parse(localStorage.getItem("actions")) || [];
    actions.forEach(entry => {
        addToRegistryLog(entry.action);
    });

    
});
