const router = require('express').Router();
const {Comment} = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/', async (res,req) => {
    // try{
    //     const querys = req.query;
    //     console.log(querys);
    //     res.json(123);
    //     //  const commentData = await Comment.findAll
    // }
    // catch(err){console.log(err)};

});

router.post('/', withAuth, async (res,req) => {
    try{
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newComment);
    } catch(err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req,res) => {
    try{
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id:req.sessions.user_id,
            }
        });
        if(!commentData) {
            res.status(404).json({ message: 'No comment found with this id! '});
            return;
        }
        res.status(200).json(commentData);
} catch (err) {
    res.status(500).json(err)
}
});

module.exports = router;
