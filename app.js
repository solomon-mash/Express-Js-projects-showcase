const express = require("express");
const app = express();

app.use(express.static("public")); // Serve static files (CSS, JS, images)

// Route to send card data with image URLs
app.get("/cards", (req, res) => {
    const cards = [
        { id: "card1", title: "Python Encryptor", description: "A simple fun python script to encrypt text files.", image: "/images/encryptor.jpg",github_link: "https://github.com/solomon-mash/Python-Encryptor/", web_link: "http://solomon-macharia.vercel.app", email_link: "http://www.google.com"},
        { id: "card2", title: "MediaFlow 🎵🎥", description: "A sleek and intuitive video and music player built with Flutter.", image: "/images/media.png",github_link: "https://github.com/solomon-mash/Flutter-Media-Player/", web_link: "http://solomon-macharia.vercel.app", email_link: "http://www.google.com" }, 
        { id: "card3", title: "Portfolio Website", description: "A personal portfolio website that showcases my skills and projects done.", image: "/images/portfolio0_KQJR5MY.jpg", github_link: "https://github.com/solomon-mash/", web_link: "http://solomon-macharia.vercel.app", email_link: "http://www.google.com" },
       
    ];
    res.json(cards);
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000}`);
});
