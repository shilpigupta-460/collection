// Image scroll on button click
import React, { useState } from 'react'
import { sculptureList } from "./data"

const ImageScroll = () => {
    const [datas, setDatas] = useState(sculptureList)
    const [index, setIndex] = useState(0)
    const [show, setShow] = useState(false)
    let data = datas[index] // assign  sculptureList[0]
    return (
        <>
            <div style={{ width: "60vw" }}>
                <button onClick={(id) => setIndex(index + 1)}> {index}</button>
                <h4>({index} of {datas.length})</h4>
                <h4>{data.artisit}</h4>
                <img src={data.url} />
                <button onClick={() => setShow(!show)}>{show ? "hide" : 'show'}</button>
                {show && <h4 >{data.description}</h4>}

            </div>
            {/* <div>
                <button onClick={() => setIndex(index + 1)}> {index}</button>
                <h4>({index} of {datas.length})</h4>
                <h4>{data.artisit}</h4>
                <img src={data.url} />
                <h4>{data.description}</h4>

            </div> */}
        </>

    )
}

export default ImageScroll