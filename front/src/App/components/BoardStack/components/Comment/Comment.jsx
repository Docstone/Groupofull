import React from 'react';
import { DateFormat , TimeFormat } from '../../../../helpers/DateFormat';
import { CapitalizeFirst } from '../../../../helpers/CapitalizeFirst';
import AdminButton from '../../../Base/components/Button/AdminButton/AdminButton';


const Comment = ( props ) => {
    const rank = localStorage.getItem('rank')
    return (
        <div className='comment'>
            <div className='comment__info__container'>
                <p className='comment__info__text'>par<strong> {CapitalizeFirst(props.comment.user.firstName)} {CapitalizeFirst(props.comment.user.lastName)}</strong></p>
                <p  className='comment__info__text'>le<strong> {DateFormat(props.comment.createdAt)}</strong> à <strong>{TimeFormat(props.comment.createdAt)}</strong> </p>
                {rank === 'admin' && <AdminButton commentUuid={props.comment.uuid} />}
            </div>
            <p className='comment__body'>{props.comment.body}</p>
        </div>
    );
}

export default Comment;
