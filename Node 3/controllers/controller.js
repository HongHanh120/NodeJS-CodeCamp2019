const Post = require('../models/post');

async function getObject(request, response){
    try{
        const Id = request.params.id;
        const post = await Post.findById(Id).lean();
        response.send({
            success: true,
            data: post
        });
    } catch (error){
        response.send({
            success: false,
            message: "Couldn't get object"
        });
    }
}

async function create(request, response){
    try{
        const {title} = request.body;
        const post = new Post({
            title: title,
            complete: false,
            create: Date.now()
        });

        await post.save();
        return response.send({
            success: true,
            data: post
        });
    } catch(error){
        response.send({
            success: false,
            message: "Couldn't create object" + error
        });
    }
}

async function updateTitle(request, response) {
    const newTitle = request.body.title;
    if(!newTitle){
        return response.send({
            success: false,
            message: "Title isn't empty"
        });
    }
    try {
        const Id = request.params.id;
        const post = await Post.findByIdAndUpdate(
            Id,
            {$set: {
                title: newTitle
                }},
            {new: true}
        );
        response.send({
            success: true,
            data: post
        });
    } catch(error){
        response.send({
           success: false,
           message: "Couldn't update the title"
        });
    }
}

async function updateStatus(request, response) {
    try{
        const Id = request.params.id;
        var post = await Post.findById(Id).lean();
        const completed = post.completed;
        await Post.updateOne(
            post,
            {$set:{
                completed: !completed
                }}
        );
        response.send({
            success: true,
            data: post
        });
    } catch (error){
        response.send({
            success: false,
            message: "Couldn't update the status"
        });
    }
}

async function del(request, response){
    try{
        const Id = request.params.id;
        await Post.findByAndRemove(Id);
        response.send({
            success: true,
            data: true
        });
    } catch(error) {
        response.send({
            success: false,
            message: "Couldn't delete object"
        });
    }
}

module.exports.getObject = getObject;
module.exports.create = create;
module.exports.updateTitle = updateTitle;
module.exports.updateStatus = updateStatus;
module.exports.del = del;