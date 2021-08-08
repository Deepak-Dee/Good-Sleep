import  ErrorHandler from '../utils/errorHandler';

export default (req, res, err ,next) => {
    err.statusCode = err.statusCode || 500;

    let error = {...err}

    error.message = err.message

    //Wrong mongoose object id
    if(err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        error = new ErrorHandler(message, 400);
    }

    //Handling validation error mongoose
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value => value.message);
        error = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        error,
        message: error.message,
        stack: error.stack
    })

}