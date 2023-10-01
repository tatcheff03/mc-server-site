// Function to start or restart the server
function startOrRestartServer(event) {
    const action = event.target.id === "startButton" ? "started" : "restarted";
    alert(`Server ${action}.`);

    console.log("Sending message to registry page...");
    window.parent.postMessage({ type: "serverAction", action }, "*");
}

 
document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const restartButton = document.getElementById("restartButton");
    const commandInput = document.getElementById("commandInput");
    const submitButton = document.getElementById("submitCommand");
    const consoleOutput = document.getElementById("consoleOutput");

    startButton.addEventListener("click", startOrRestartServer);
    restartButton.addEventListener("click", startOrRestartServer);

    submitButton.addEventListener("click", () => {
        const command = commandInput.value;
        if (command.trim() !== "") {
            appendToConsole(`> ${command}`);
            // Here, you can implement logic to execute the command on your server
            commandInput.value = ""; // Clear the input
        }
    });

    function appendToConsole(text) {
        const line = document.createElement("div");
        line.textContent = text;
        consoleOutput.appendChild(line);
        consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("access-form");
    const playerNameInput = document.getElementById("player-name");
    const messageDiv = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const playerName = playerNameInput.value;
        accessServer(playerName);
    });

    function accessServer(playerName) {
        // Simulate server access here, you can replace this with actual server communication logic
        // For example, you can send a request to your Minecraft server API to grant access to the player.

        // Simulating a successful response
        const response = {
            success: true,
            message: `Access granted to ${playerName}. Have fun playing on the server!`
        };

        displayMessage(response.message, response.success);
    }

    function displayMessage(message, isSuccess) {
        messageDiv.textContent = message;
        messageDiv.style.color = isSuccess ? "green" : "red";
    }
});

