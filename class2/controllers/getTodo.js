// import the model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req, res) => {
    try {
            //fetch all todo items from database
            const todos = await Todo.find({});

            // send a json response with a success flag
            res.status(200)
            .json(
                {
                    success:true,
                    data:todos,
                    message:"Entire data is fetched"
                }
            )
    }

    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                message:"internal server error",
                error:err.message,
            }
        )
    }
}


exports.getTodoById = async(req, res) => {
    try {
            //fetch todo items based on ID from database
            const id = req.params.id;
            const todo = await Todo.findById({_id: id});

            // data for given id is not found
            if(!todo) {
                return res.status(404).json({
                    success:false,
                    message:"No data found for given id"
                })
            }

            // if data for given id is found : send a json response with a success flag
            res.status(200)
            .json(
                {
                    success:true,
                    data:todo,
                    message:Todo `${id} is fetched`
                }
            )
    }

    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                message:"internal server error",
                error:err.message,
            }
        )
    }
}