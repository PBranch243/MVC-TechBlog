const router = require('express').Router();

//lines 4-6 handle api routes we tested in insomnia, line 7 is routes for serving info to the handlebar pages
const userRoutes = require('./api/user-routes.js');
const postRoutes = require('./api/post-routes');
const commentRoutes = require('./api/comment-routes');
const homeRoutes = require('./home-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
// the routes serving pages are  in different files, get all those corrected
router.use('/', homeRoutes);


module.exports = router;


//add res.render statements to the routes in userRoutes, etc.