const Book = require("./book.model");

const postABook = async (req,res) =>{
    try{
        const newBook = await Book({...req.body})
        await newBook.save();
        res.status(200).send({message: "Book posted", book:newBook})
    } catch (error){
        console.error(error);
        res.status(500).send({message: "Failed to post!!"})

    }
}

const getAllBooks = async (req,res)=>{
    try{
        const books = await Book.find().sort({createdAt: -1})
        res.status(200).send(books)
    } catch (error){
        console.error("Error!!",error)
        res.status(500).send({message: "Failed to fetch"})
    }
} 

const getSingleBook = async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id) 
        if(!book){
            res.status(404).send({message: "Book Not Found!!"})
        }
        res.status(200).send(book)
    } catch (error){
        console.error("Error!!",error)
        res.status(500).send({message: "Failed to fetch"})
    }
}

const updateBook = async(req,res)=>{
    try{
        const {id} = req.params
        const updatedBook = await Book.findByIdAndUpdate(id,req.body,{new: true})
        if(!updatedBook){
            res.status(404).send({message: "Book not Found!!"})
        }
        res.status(200).send({
            message: "Book Updated Successfully!",
            book: updatedBook
        })
    } catch (error){
        console.error("Error!!",error)
        res.status(500).send({message: "Failed to Update"})
    }
}

const deleteABook = async(req,res)=>{
    try {
        const {id} = req.params
        const deletedBook = await Book.findByIdAndDelete(id)
        if(!deletedBook){
            res.status(404).send({message: "Book not Found"})
        }
        res.status(200).send({
            message: "Book Deleted Successfully",
            book: deletedBook
        })
    } catch (error) {
        console.error("Error in deleting",error)
        res.status(500).send({message: "Failed to delete book"})
    }
} 

module.exports = {
    postABook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteABook
}