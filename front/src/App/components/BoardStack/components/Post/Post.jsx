import React from 'react';
import { useState } from 'react';
import { DateFormat , TimeFormat } from '../../../../helpers/DateFormat';
import { CapitalizeFirst } from '../../../../helpers/CapitalizeFirst';
import CommentBoard from '../CommentBoard/CommentBoard';
import AdminButton from '../../../Base/components/Button/AdminButton/AdminButton';

const Post = (props) => {
    const [ showComments, setShowComments ] = useState(false)
    const rank = localStorage.getItem('rank')
   
    
    return (

        <div>
            <div className='board__type__container'>
                <span className='board__type'>{props.post.type.toUpperCase()}</span>
            </div>
            <div className='board__post'>
                <div className='board__postInfo'>
                    <div className='board__postInfo'>
                       { props.post.user ?
                       <p  className='board__postInfo__detail'> <span className='board__postInfo--hide'>Posté par &nbsp;</span><strong> {CapitalizeFirst(props.post.user.firstName)} {CapitalizeFirst(props.post.user.lastName)}</strong></p>
                       : <p>Utilisateur Supprimé</p>}
                    </div>
                    <div className='board__postInfo'>
                        <p  className='board__postInfo__detail'>{DateFormat(props.post.createdAt)} a {TimeFormat(props.post.createdAt)}</p>
                    </div>
                </div>
                    {rank === 'admin' && <AdminButton postUuid={props.post.uuid} postType={props.post.type}/>}
                <h2 className='board__postTitle'>{props.post.title}</h2>
                <h3 className='board__postBody' >{props.post.body}</h3>
                {props.post.type === 'media' &&  (
                    <img className='board__postImg' src={props.post.mediaUrl} alt={props.post.title} />
                )}
                {showComments === false  && props.post.comments.length > 0 && (
                    <p className='board__commentsLink' onClick={() => setShowComments(true)}>Voir les Commentaires ({props.post.comments.length})</p>
                )}
                {showComments === false  && props.post.comments.length < 1 && (
                    <p className='board__commentsLink' onClick={() => setShowComments(true)}>Commenter</p>
                )}
                {showComments === true && (
                    <div>
                        <p className='board__commentsLink' onClick={() => setShowComments(false)}>Cacher les Commentaires ({props.post.comments.length})</p>
                        <CommentBoard postUuid={props.post.uuid}/>
                        { props.post.comments.length > 5 && <p className='board__commentsLink' onClick={() => setShowComments(false)}>Cacher les Commentaires ({props.post.comments.length})</p>}
                   </div>
                  )}
            </div>
        </div>
    )
}

export default Post;
