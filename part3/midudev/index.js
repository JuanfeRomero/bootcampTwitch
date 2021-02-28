const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let notes = [
    {
        id: 1,
        primera: 'Nota numero 1',
        segundo: 'Nota numero 2',
        tercera: 'Nota numero 3',
    },
    {
        id: 2,
        primera: 'Nota numero 4',
        segundo: 'Nota numero 5',
        tercera: 'Nota numero 6',
    },
    {
        id: 3,
        primera: 'Nota numero 7',
        segundo: 'Nota numero 8',
        tercera: 'Nota numero 9',
    },
    {
        id: 4,
        primera: 'Nota numero 10',
        segundo: 'Nota numero 11',
        tercera: 'Nota numero 12',
    },
];

app.get('/', (req, res) => {
    res.send('<h1>Hola mundo en</h1>');
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const note = notes.find((note) => note.id === Number(id));

    if (note) {
        console.log(note);
        res.json(note);
    } else {
        console.log(note);
        res.status(404).end();
    }
});

app.delete('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id);
    notes = notes.filter((note) => note.id !== id);
    res.status(204).end();
});

app.post('/api/notes', (req, res) => {
    const note = req.body;

    if (!note) {
        return res.status(400).json({
            error: 'note is missing!',
        });
    }

    const ids = notes.map((note) => note.id);
    const maxId = Math.max(...ids);

    const newNote = {
        id: maxId,
        primero: note.primero,
        segundo: note.segundo,
        tercero: note.tercero,
    };

    notes = notes.concat(newNote);
    
    res.status(201).json(newNote);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
