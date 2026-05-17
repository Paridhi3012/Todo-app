const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, text: "Learn Docker", done: false },
  { id: 2, text: "Setup Jenkins", done: false },
];
let nextId = 3;

// GET all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// POST new todo
app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });
  const todo = { id: nextId++, text, done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// PATCH toggle done
app.patch("/api/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: "Not found" });
  todo.done = !todo.done;
  res.json(todo);
});

// DELETE todo
app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter((t) => t.id !== parseInt(req.params.id));
  res.json({ message: "Deleted" });
});

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
