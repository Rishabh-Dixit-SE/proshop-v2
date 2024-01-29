const notfound=(req,res,next)=>{
    const error= new Error(`Not Found-${req.originalUrl}`);
    res.send(404);
    next(error);
}

const errorHandler=(err,req,res,next)=>{
    let statusCode=res.statusCode===200?500:res.statusCode;
    let message=err.message;

    //check for mongoose bad objectID

    if(err.name ==='CasteError' && err.kind ==='ObjectId')
    {
message='Resource not found';
statusCode=404;
    }

    res.statusCode(statusCode).json({
        message,stack:process.env.Node_ENV === 'production' ? 'pancake' :err.stack,
    });

};

export {notfound,errorHandler};
