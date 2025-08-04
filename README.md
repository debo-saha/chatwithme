# Chat with Ayushi 💖

A simple, persona-driven web chatbot powered by the Google Gemini API and deployed on Render. This project features a responsive chat interface where users can interact with "Ayushi," a character with a pre-defined personality and memory.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

---


## 🚀 Features

- **Responsive UI**: A clean, modern chat interface that works beautifully on both desktop and mobile devices.
- **Persona-Driven Conversation**: Utilizes a detailed system prompt for the Google Gemini API to create a consistent and engaging chatbot personality.
- **Real-time Feel**: A "typing..." indicator provides feedback while waiting for the AI's response.
- **Stateless Backend**: A simple Express.js server that processes chat history and returns responses.
- **One-Click Deployment**: Configured for easy deployment on Render.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini API (`@google/generative-ai`)
- **Deployment**: Render

---

## 🔧 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**

- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- `npm` (comes with Node.js)
- A Google Gemini API key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### **Local Installation**

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/debo-saha/chatwithme.git
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd your-repo-name
    ```

3.  **Install NPM packages:**
    ```sh
    npm install
    ```

4.  **Create your environment file:**
    Create a file named `.env` in the root of the project and add your Gemini API key:
    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

5.  **Run the server:**
    ```sh
    node server.js
    ```

6.  **Open the application:**
    Open your browser and navigate to `http://localhost:3000`.

---

## 🌐 Deployment

This application is configured for easy deployment on **Render**.

1.  Push your code to a GitHub repository.
2.  Click the "Deploy to Render" button at the top of this README or create a new "Web Service" on the Render dashboard and connect your repository.
3.  In the Render settings, add an **Environment Variable**:
    - **Key**: `GEMINI_API_KEY`
    - **Value**: `YOUR_API_KEY_HERE`
4.  Render will automatically build and deploy your application. Any future pushes to your main branch will trigger a new deployment.
