# 😂 Jokes API Project

**Random Jokes Generator — Powered by API**

*Click a button. Get a laugh. It's that simple.*

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Jokes_Generator-FF6B6B?style=for-the-badge)](https://your-demo-link.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Anas-Sd/Jokes-API?style=for-the-badge&color=gold)](https://github.com/Anas-Sd/Jokes-API)
[![GitHub Forks](https://img.shields.io/github/forks/Anas-Sd/Jokes-API?style=for-the-badge&color=8B5CF6)](https://github.com/Anas-Sd/Jokes-API)

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/REST_API-10B981?style=flat-square&logo=fastapi&logoColor=white)

---

## 🧬 What is Jokes API Project?

> Learning APIs doesn't have to be boring. **Jokes Generator** makes it fun — literally.

A **lightweight web app** that fetches random jokes from a public API and displays them dynamically — demonstrating core async JavaScript concepts with zero dependencies.

```javascript
const jokesGenerator = {
    input: "Button click",
    output: "😂 Random joke",
    stack: ["HTML", "CSS", "JavaScript"],
    api: "Public Jokes API",
    status: "🟢 Live"
};

async function getJoke() {
    const response = await fetch(JOKES_API_URL);
    const data = await response.json();
    return data.joke; // 😂 Laughter delivered
}
```

---

## ✨ Features

| | Feature | Description |
|:---:|:---|:---|
| 🎲 | **Random Jokes** | Fetch fresh jokes from an external API on every click |
| ⚡ | **One-Click Generation** | Single button press delivers instant humor |
| 🔄 | **Dynamic Rendering** | Content updates in real-time without page reload |
| 📱 | **Responsive Design** | Clean interface that works on all screen sizes |
| 🌐 | **API Integration** | Demonstrates real-world REST API consumption |
| 🪶 | **Zero Dependencies** | Pure vanilla JS — no frameworks, no bloat |

---

## 🛠️ Tech Stack

### 🌐 Frontend

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 📡 API

![REST API](https://img.shields.io/badge/Public_Jokes_API-10B981?style=for-the-badge&logo=fastapi&logoColor=white)

---

## 🔄 How It Works

```
┌─────────────────┐     ┌──────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Button Click    │ ──▶ │   API Request     │ ──▶ │   Receive Data    │ ──▶ │  Display Joke    │
│                 │     │                  │     │                  │     │                 │
│ • User clicks   │     │ • Fetch API call │     │ • Parse JSON     │     │ • Update DOM    │
│   "Get Joke"    │     │ • Async/await    │     │ • Extract joke   │     │ • Show to user  │
│                 │     │ • Handle errors  │     │ • Validate data  │     │                 │
└─────────────────┘     └──────────────────┘     └──────────────────┘     └─────────────────┘
```

---

## 🎯 Learning Focus

| | Highlight |
|:---:|:---|
| 📡 | **Fetch API usage** — Making HTTP requests with modern JavaScript |
| ⏳ | **Async operations** — Handling promises with async/await patterns |
| 📦 | **JSON parsing** — Extracting and transforming API response data |
| 🖱️ | **Dynamic UI updates** — Rendering content without page reloads |

---

## 📁 Project Structure


```
Jokes-API/
├── 📄 index.html          # Main HTML structure
├── 📂 css/
│   └── 📄 style.css       # Styling & layout
├── 📂 js/
│   └── 📄 script.js       # API logic & DOM manipulation
├── 📂 assets/
│   └── 📂 images/         # Icons & UI assets
├── 📄 LICENSE
└── 📄 README.md
```


---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser
- Active internet connection (for API calls)

### Installation

```bash
# Clone the repository
git clone https://github.com/Anas-Sd/Jokes-API.git

# Navigate to the project
cd Jokes-API

# Open in browser
open index.html
# or simply double-click index.html
```

> 💡 **That's it!** No build tools, no npm — just open and laugh.

---

## 📡 API Reference



### `GET /joke`

| Parameter | Type | Description |
|:----------|:-----|:------------|
| `type` | `string` | Optional — `single` or `twopart` |
| `category` | `string` | Optional — joke category filter |

**Response:**
```json
{
    "joke": "Why do programmers prefer dark mode? Because light attracts bugs."
}
```


---

## 📬 Let's Connect!

<p align="center">
<a href="https://github.com/Anas-Sd"><img src="https://img.shields.io/badge/GitHub-Anas--Sd-181717?style=for-the-badge&logo=github&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/syedanas-sd"><img src="https://img.shields.io/badge/LinkedIn-Syed_Anas-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
<a href="mailto:sdanasbtech@gmail.com"><img src="https://img.shields.io/badge/Email-sdanasbtech@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white"/></a>
<a href="https://syedanas.me"><img src="https://img.shields.io/badge/Portfolio-syedanas.me-00D9FF?style=for-the-badge&logo=google-chrome&logoColor=white"/></a>
</p>

<p align="center">
📍 <strong>India</strong> | 🕐 <strong>IST (UTC+5:30)</strong> | ✅ <strong>Open for Opportunities</strong>
</p>

---

## ⚖️ License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

<p align="center">

### 💬 "The best way to learn APIs? Make them tell you jokes."

</p>

<p align="center">
<strong>⭐ If you found this useful, give it a star!</strong>
</p>

<p align="center">
<strong>From <a href="https://github.com/Anas-Sd">SYED ANAS</a> with ❤️</strong>
</p>
