import React from 'react'

export const CustomButtonEventHandler = () => {
    return (
        <div>
            <Button onSmash={() => alert('Playing!')}>
                Play Movie
            </Button>
            <Button onSmash={() => alert('Uploading!')}>
                Upload Image
            </Button>
        </div>
    )
}
function Button({ onSmash, children }) {
    return (
        <button onClick={onSmash}>
            {children}
        </button>
    );
}

