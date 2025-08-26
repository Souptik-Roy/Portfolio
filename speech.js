// Check browser support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = true;  
  recognition.interimResults = false;
  recognition.lang = "en-US";

  const resultSpan = document.getElementById("result");

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
    resultSpan.textContent = "You said: " + transcript;

    if (transcript.includes("home")) {
      document.getElementById("home").scrollIntoView({ behavior: "smooth" });
    } else if (transcript.includes("about")) {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    } else if (transcript.includes("education")) {
      document.getElementById("education").scrollIntoView({ behavior: "smooth" });
    } else if (transcript.includes("achievement")) {
      document.getElementById("achievements").scrollIntoView({ behavior: "smooth" });
    } else if (transcript.includes("project")) {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    } else if (transcript.includes("contact")) {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }
    

    else {
      resultSpan.textContent += " (No matching section)";
    }
  };

  recognition.onerror = (event) => {
    resultSpan.textContent = "Error: " + event.error;
  };

  recognition.onend = () => {
    recognition.start(); // auto restart
  };

  recognition.start();
} else {
  alert("Speech Recognition not supported in this browser!");
}
