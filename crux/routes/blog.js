var
    express = require('express'),
    app = express(),
    Poet = require('poet');

var poet = Poet(app);

poet.addRoute('/myposts/:post', function (req, res, next) {
    var post = poet.helpers.getPost(req.params.post);
    if (post) {
        // Do some fancy logging here
        res.render('post', {
            post: post
        });
    } else {
        res.send(404);
    }
}).init();
