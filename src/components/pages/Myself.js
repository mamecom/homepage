import * as React from 'react';

//モジュール
import MyselfCard from '../modules/MyselfCard';

//CSS
import './pages.css';

const constant = [
    {title: '自己紹介',
    content: '文系大学卒26歳です。　就職を機に組み込み系システムで3年ほど経験を積みました。',
    pic: `${process.env.PUBLIC_URL}/image/notebook.jpeg`,},
]

export default function Myself() {
    return(
        <div class="myselfCard">
            <MyselfCard title={constant[0].title} contents={constant[0].content} images={constant[0].pic} />
        </div>
    );
}