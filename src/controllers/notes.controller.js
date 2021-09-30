//* metodos que ejecutan las rutas de notes
const notesCtrl = {};

//? Exporto el modelo de las notas
const Note = require('../models/Note');


//* solicita todas las notas de la coleccion que hizo el modelo Note.js
notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
}

//* Crea la nueva nota que me manden
notesCtrl.createNote = async (req, res) => {

    //* saco los parametros de la nota que me mandan
    const {title, content, date, author} = req.body;

    //* Hago la nueva nota
    const newNote =new Note({
        title: title,
        content: content,
        date: date,
        author: author
    })
    //* Guardo la nueva nota en la base de datos conectada con mongoose
    await newNote.save()

    res.json({message: "Nota creada"})
}


notesCtrl.getNote = async (req, res) => {
    //* Encuentro la nota por id
    const Notefounded = await Note.findById(req.params.id)
    res.json(Notefounded)
}

notesCtrl.deleteNote = async (req, res) =>{
    //* Elimino la nota por id
    await Note.findByIdAndDelete(req.params.id)
    res.json({message:" Note Deleted"})
}

notesCtrl.updateNote = async (req, res) => {
    const {title,content,author,date} = req.body;
    await Note.findByIdAndUpdate(req.params.id,{
        title,
        content,
        author,
        date
    })
    res.json({message:" Note Updated"})
}

module.exports = notesCtrl;