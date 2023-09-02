import React, { Fragment } from 'react'

const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};
// with foreach()
// const ObjectOfArray = () => {
//     let output = [];
//     // Fill the output array
//     poem.lines.forEach((line, i) => {
//         output.push(
//             <hr key={i + '-separator'} />
//         );
//         output.push(
//             <p key={i + '-text'}>
//                 {line}
//             </p>
//         );
//     });
//     // Remove the first <hr />
//     output.shift();

//     return (
//         <article>
//             {output}
//         </article>
//     );
// }


//export default ObjectOfArray

//2 way with map()
const ObjectOfArray = () => {
    return (
        <article>
            {poem.lines.map((line, i) =>
                <Fragment key={i}>
                    {i > 0 && <hr />}
                    <p>{line}</p>
                </Fragment>
            )}
        </article>
    )
}

export default ObjectOfArray