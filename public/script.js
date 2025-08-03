document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const typingIndicator = document.getElementById("typing-indicator");
    const serverUrl = "http://localhost:3000";

    let conversationHistory = [];

    chatForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const userMessageText = userInput.value.trim();
        if (userMessageText === "") return;

        addMessageToChatBox(userMessageText, "user");
        userInput.value = "";
        userInput.disabled = true;

        // Show the typing indicator
        typingIndicator.style.display = "flex";
        chatBox.scrollTop = chatBox.scrollHeight;

        const historyForAPI = [...conversationHistory];
        
        try {
            const response = await fetch(`${serverUrl}/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    history: historyForAPI,
                    message: userMessageText,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Something went wrong");
            }

            const data = await response.json();
            const ayushiResponse = data.message;

            // Update history BEFORE showing the message
            conversationHistory.push({ role: "user", parts: [{ text: userMessageText }] });
            conversationHistory.push({ role: "model", parts: [{ text: ayushiResponse }] });
            
            // Hide indicator and add the new message
            typingIndicator.style.display = "none";
            addMessageToChatBox(ayushiResponse, "ayushi");

        } catch (error) {
            console.error("Error:", error);
            typingIndicator.style.display = "none";
            addMessageToChatBox(`Oh no! My connection is a little wonky. 🥺 Please try again.`, "ayushi");
        } finally {
            userInput.disabled = false;
            userInput.focus();
        }
    });

    function addMessageToChatBox(message, sender) {
        const messageWrapper = document.createElement("div");
        messageWrapper.classList.add("message", `${sender}-message`);
        
        const messageParagraph = document.createElement("p");
        messageParagraph.textContent = message;
        messageWrapper.appendChild(messageParagraph);

        chatBox.insertBefore(messageWrapper, typingIndicator);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});