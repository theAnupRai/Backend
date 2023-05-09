// import the model
const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async(req, res) => {
    try {
        const {id} = req.params;

        await Todo.findOneAndDelete(id);

        res.json({
            success:true,
            message:"Todo deleted successfully"
        })
    }

    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        )
    }
}