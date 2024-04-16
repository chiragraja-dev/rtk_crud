import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const [values, setValues] = useState({ title: "", body: "" })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // handle create post


    return (
        <>
            <div className='row mt-4 d-flex align-item-center justify-content-center'>
                <form>
                    <div className="form-group">
                        <h3 >Create Post</h3>
                        <input type="text" className="form-control md-3 mt-4" placeholder="Create Post" />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreatePost