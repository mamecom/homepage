import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Skill_Card(props) {
  return (
    <div>
    <Card sx={{ maxWidth: 345, mx: "auto", height: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={props.images}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.contents}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
