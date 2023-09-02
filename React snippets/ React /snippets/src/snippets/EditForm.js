import React, { useState } from 'react'
export default function EditForm() {
    const [typing, setTyping] = useState(false)
    const [detail, setDetail] = useState({
        fname: "Jack",
        lname: "Jill"

    })
    const handleChange = (e) => {

        setDetail({
            ...detail,
            [e.target.name]: e.target.value
        })


    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setTyping(!typing)
        }}>
            <label>
                First name:

                {typing ?
                    (<input name="fname" value={detail.fname}
                        onChange={handleChange} />) :
                    (<b> {detail.fname}</b>)}
            </label>
            <label>
                Last name:
                {typing ?
                    (<input name="lname" value={detail.lname}
                        onChange={handleChange} />) :
                    (<b> {detail.lname}</b>)}</label>
            <button type="submit">
                {typing ? 'Save' : 'Edit'} Profile
            </button>
            <p><i>Hello,{detail.fname} {detail.lname}!</i></p>
        </form>
    );
}
