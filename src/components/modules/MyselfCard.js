import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';

export default function MyselfCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 1350, mx: "auto", height: 600 }}>
        <CardActionArea>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <CardMedia
              component="img"
              height="600"
              image={props.images}
              alt=""
            />
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h2 className="title">
                  {props.title}
                </h2>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className="contents">
                  {props.contents}
                </div>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
        </CardActionArea>
      </Card>
    </div>
  );
}