import React, { useState } from 'react'

const Form = () => {
    //1)
    // const [name, setName] = useState('')
    // const [pass, setPass] = useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     alert(`
    //    ${name} is ${pass}`)
    // }

    // 2) using state object
    const [user, setUser] = useState({
        name: "",
        pass: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`
       ${user.name} is ${user.pass}`)
    }

    const handle = (e) => {
        const { name, value } = e.target
        // setUser((pre)=>({...pre,}))
        setUser(pre => ({ ...pre, [name]: value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={user.name} onChange={handle} />
            <input type="text" name="pass" value={user.pass} onChange={handle} />
            < button > Submit</button>
        </form >
    )



    // map work on Array only. if you want to work with obj ---> let dataArr = Array.from(user)


}

export default Form