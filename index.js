const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/api/items', (req, res) => {
  res.json([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);
});

app.post('/api/items', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Le champ name est requis.' });
  }

  const newItem = {
    id: Date.now(),
    name
  };

  res.status(201).json(newItem);
});


console.log("Test Jira");

const server = app.listen(port, () => {
  console.log(`API Express démarrée sur http://localhost:${port}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} déjà utilisé. Fermez l'autre instance ou changez le port.`);
  } else {
    console.error('Erreur serveur :', err);
  }
});
