import express from "express";
import path from "path";

const app = express();

app.post("/api/auth", (req, res) => {
  res.status(400).json({ errors: { global: "Invalid credentials." } });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started in port ${port}`));
