import express from "express";
import path from "path";
import{ fileURLToPath } from "node:url";

const  filename = fileURLToPath(import.meta.url);
const  dirname = path.dirname( filename);

const app = express();
app.get("/", (req, res) => {
    res.sendFile(path.join(dirname, "pages", "product.html"));
});
app.get("/contact", (req, res) => {
    res.sendFile(path.join(dirname, "pages", "contact.html"));
});
app.use((req, res) => {
    res.status(404),send("404 Page Not Found");
});

app.listen(4444, () => console.log("prg2 is running at port 4444"));
