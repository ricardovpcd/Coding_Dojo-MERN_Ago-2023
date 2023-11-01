import Author from "../models/authorModel.js";

const createAuthor = async (req, res) => {
    try {
        var authorData = req.body;
        var newAuthor = await Author.create(authorData);
        res.status(200).json(newAuthor);
    } catch(e) {
        res.status(400).json({
            "message": e.message
        });
    }

    /*if(authorData.name.length >= 3){
        var newAuthor = await Author.create(authorData);
        res.status(200).json(newAuthor);
    } else {
        res.status(400).json({
            "mensaje": "El autor tiene que tener minimo 3 caracteres"
        });
    }*/
}

const getAuthors = async (req, res) => {
    var authorList = await Author.find();
    res.json(authorList);
}

const getOneAuthor = async (req, res) => {
    var id = req.params.idAuthor;
    var authorFound = await Author.findById(id);
    res.json(authorFound);
}

const deleteAuthor = async (req, res) => {
    var id = req.params.idAuthor;
    await Author.findByIdAndDelete(id);
    res.status(200).json();
}

const updateAuthor = async (req, res) => {
    try{
        var id = req.params.idAuthor;
        var data = req.body;
        await Author.findByIdAndUpdate(id, data, {runValidators: true});
        res.status(200).json();
    }catch(e){
        res.status(400).json({
            "message": e.message
        })
    }
}

export { createAuthor, getAuthors, getOneAuthor, deleteAuthor, updateAuthor }