import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getPost, deletePost } from '../Redux/Features/postSlice';
import Spinner from './Spinner';

const Post = () => {
    const [Id, setId] = useState();
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, post } = useSelector(state => ({ ...state.app }));

    const fetchPost = () => {
        if (!Id) {
            window.alert("Plese Provide the Id");
        } else {
            dispatch(getPost({ Id }));
            // debugger
            setId("")
        }
    }

    const handleDelete = ({ Id }) => {
        dispatch(deletePost({ Id: post[0].Id }))
        window.alert('post deleted');
    }


    return (
        <>
            <div className="row mt-4 d-flex align-item-center justify-content-center ">
                <div className="col-md-8">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label"><h6># Search By ID</h6></label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Id} onChange={(e) => setId(e.target.value)} />
                    </div>
                    <button onClick={fetchPost} className="btn btn-primary btn-sm">Fetch Post</button>
                    <button onClick={() => Navigate('/createpost')} className="btn btn-warning btn-sm ms-4">Create Post</button>

                </div>
                <div className="row mt-4 d-flex align-item-center justify-content-center ">
                    {

                        loading ? <Spinner /> : (
                            <>
                                {post.length > 0 && (

                                    <>

                                        <div className="card">

                                            <div className="card-body">
                                                <h5 className="card-title">{post[0].title}</h5>

                                                <p className="card-text">{post[0].body}</p>
                                                <div className="d-flex align-item-center justify-content-end">
                                                    <button className='btn btn-primary btn-sm'>Edit</button>
                                                    <button className='btn btn-danger btn-sm ms-2' onClick={handleDelete}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Post