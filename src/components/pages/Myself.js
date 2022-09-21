import * as React from 'react';


import MyselfPaper from '../modules/MyselfPaper';

const constant = [
    {title: '自己紹介',
    content: '文系大学卒で3年ほど大手IT企業で組み込み系の仕事を携わっていました。<br>',
    pic: `${process.env.PUBLIC_URL}/image/notebook.jpeg`,},
]

export default function Myself() {
    return(
        <div>
            {/* <MyselfPaper /> */}
            <div>
            <img src={`${process.env.PUBLIC_URL}/image/notebook.jpeg`} width="50%" height="50%" />
            </div>
        </div>
    );
}
