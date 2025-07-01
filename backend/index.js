const express=require("express");
const app=express();
const port=8080;
const path=require("path");
// Serve static files (html, css, js, images)
app.use(express.static(path.join(__dirname, ".."))); // adjust path if needed

// Example API route
app.get("/api/message", (req, res) => {
    res.json({ message: "ShareSphere API is working ✅" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});