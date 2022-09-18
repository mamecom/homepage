import * as React from 'react';
import Grid from '@mui/material/Grid';

import Card from '../modules/Card';

const constant = [
    {title: 'HTML CSS', 
        content: '見やすさ、メンテナンス性を意識しております。', 
        pic: `${process.env.PUBLIC_URL}/image/notebook.jpeg`,},
    {title: 'C++', 
        content: '組み込み系業務で3年ほど経験しており、詳細設計からテストまでできます。こまかくメソッドを分けて見やすさ、メンテナンス性を意識しております。', 
        pic: `${process.env.PUBLIC_URL}/image/notebook.jpeg`,},
    {title: 'Python3', 
        content: 'C++と同様でメンテナンス性を意識しております。', 
        pic: `${process.env.PUBLIC_URL}/image/notebook.jpeg`,},
    {title: '製品評価', 
        content: 'リリース前の製品において、第三者チェックというのは品質面でとても重要視されていおます。ユーザビリティに特化した品質意識も可能です。', 
        pic: `${process.env.PUBLIC_URL}/image/notebook.jpeg`,},
]

// const cardobj = contents.map(element => {

// })

export default function Skill(){
    return(
        <div>
            <Grid
                justify="center"
                container
                spacing={5}
                direction="row"
            >
                <Grid item xs={4}>
                    <Card title={constant[0].title} contents={constant[0].content} images={constant[0].pic} />
                </Grid>
                <Grid item xs={4}>
                    <Card title={constant[1].title} contents={constant[1].content} images={constant[1].pic} />
                </Grid>
                <Grid item xs={4}>
                    <Card title={constant[2].title} contents={constant[2].content} images={constant[2].pic} />
                </Grid>
                <Grid item xs={4}>
                    <Card title={constant[3].title} contents={constant[3].content} images={constant[3].pic} />
                </Grid>
            </Grid>
        </div>
    );
}