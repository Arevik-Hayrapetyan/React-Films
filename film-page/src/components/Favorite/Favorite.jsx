import React from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { getItems } from "../../helpers/localStorage";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    padding: "100px",
    marginRight: "50%",
    maxWidth: 200,
    paddingTop: 0,
  },

  media: {
    height: 100,
  },
});

export default function Favorite() {
  const classes = useStyles();
  const [isLogin] = useState(getItems("isLogin"));
  const [favorite] = useState(
    getItems("favorite") !== null ? getItems("favorite") : []
  );

  return isLogin ? (
    <div className="movie-wrapper">
      {favorite.map((item) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} />
            <img
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              alt="Movie"
              key={item.id}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                key={item.id}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                key={item.id}
              >
                {item.overview}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  ) : (
    <Redirect to="/login" />
  );
}
