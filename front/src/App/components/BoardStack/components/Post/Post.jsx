import React from 'react';
import { useState } from 'react';
import { DateFormat , TimeFormat } from '../../../../helpers/DateFormat';
import { CapitalizeFirst } from '../../../../helpers/CapitalizeFirst';
import CommentBoard from '../CommentBoard/CommentBoard';
import CommentPost from '../CommentPost/CommentPost';

const Post = (props) => {
    const [ showComments, setShowComments ] = useState(false)
    
    return (
        <div>
            <div className='board__type__container'>
                <span className='board__type'>{props.post.type.toUpperCase()}</span>
            </div>
            <div className='board__post'>
                <div className='board__postInfo'>
                    <div className='board__postInfo__author'>
                        <p  className='board__postInfo'> Posté par&nbsp;<strong>{CapitalizeFirst(props.post.user.firstName)} {CapitalizeFirst(props.post.user.lastName)}</strong></p>
                    </div>
                    <div>
                        <p  className='board__postInfo'>le&nbsp;<strong>{DateFormat(props.post.createdAt)}</strong>&nbsp;à&nbsp;<strong>{TimeFormat(props.post.createdAt)}</strong></p>
                    </div>
                </div>
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
                        <p className='board__commentsLink' onClick={() => setShowComments(false)}>Cacher les Commentaires</p>
                        <CommentBoard postUuid={props.post.uuid}/>
                        <p className='board__commentsLink' onClick={() => setShowComments(false)}>Cacher les Commentaires</p>
                   </div>
                  )}
            </div>
        </div>
    )
}

export default Post;
