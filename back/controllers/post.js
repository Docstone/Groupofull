const { Post, User, Comment } = require('../models');
const fs = require('fs');


exports.createPost = async (req, res) => {
  const { body, userUuid, title, type } = req.body
  try {
    if (req.file && req.body.userUuid && req.body.body){
      const mediaUrl =  `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      const user = await User.findOne({ where: { uuid: userUuid } })
      const post = await Post.create({ title, body, type, userId: user.id , mediaUrl})

      res.status(200).json({post});
      return;
    }
   else if (!req.file && req.body.userUuid && req.body.body) {
    const user = await User.findOne({ where: { uuid: userUuid } })
    const post = await Post.create({ title, body, type, userId: user.id })

    res.status(200).json({post});
    return;
  }
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
}

exports.createComment = async (req, res, next) =>{
  const { body, postUuid, userUuid} = req.body
  try {
    if ( req.body.body && req.body.postUuid && req.body.userUuid){
      const post = await Post.findOne({ where: { uuid: postUuid } })
      const user = await User.findOne({ where: { uuid: userUuid } })
      const comment = await Comment.create({ body, postId: post.id, userId: user.id})
      return res.status(200).json({comment});
    } else { 
      return res.status(400).json({err: "Bad Request"});
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
}

  exports.getPosts =  (req, res, next) => {
    Post.findAll({ include: { all: true, nested: true  }})
    .then( posts => res.status(200).json(posts))
    .catch( error => res.status(404).json({ error }));
};

exports.getPost =  (req, res, next) => {
    const uuid = req.params.uuid
    Post.findOne({ where: { uuid },  include:  { all: true, nested: true  } })
    .then(post => {
      if(post && post !== null){
        res.status(200).json(post)
      }else{
        res.status(404).json("le post n'existe pas")
      }
    })
    .catch(error => res.status(404).json({ error }));
};


exports.userPosts = (req, res, next) => {
  const uuid = req.params.uuid
  User.findOne({ 
      where: { uuid },
      include: 'posts'
  })
  .then(user => res.status(200).json(user.posts))
  .catch(error => res.status(404).json({ error }));
};

exports.deletePost = async (req, res) => {
    const uuid = req.params.uuid
    const userId = req.get('auth')
    try {
      const post = await Post.findOne({ where: { uuid }, include: 'comments' })
    
     
      if (!post) {

        return res.status(404).json({error: "Post introuvable"})

      } if ( post.type === 'text' ){

        await post.destroy()
        return res.json({ message: 'Post Supprimmé!' })

      } if ( post.type === 'media' && post.mediaUrl){

        const filename = post.mediaUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          post.destroy()
        return res.json({ message: 'Post Supprimmé!' })
        })

      } if ( post.type === 'media' && !post.mediaUrl){
          post.destroy()
        return res.json({ message: 'Post Supprimmé!' })
      }
      
      }catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Une erreur est survenue' })
    }
}

exports.deleteComment = async (req, res) => {
  const uuid = req.params.uuid
  const userId = req.get('auth')
  try {
    const comment = await Comment.findOne({ where: { uuid } , include: 'user'})
    if (!comment) {
      return res.status(404).json({error: "Commentaire introuvable"})
    }
    await comment.destroy()

    return res.json({ message: 'Commentaire Supprimmé!' })
    }catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Une erreur est survenue' })
  }
}