import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({item,
  onUpdateCartQty,
  onRemoveFromCart}) => {
  const classes = useStyles();
  return (
    <Card> 
      <CardMedia 
        className={classes.media}
        component="img"
        image={item.image.url}
        alt={item.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography  variant="h4" component="div">
          {item.name}
        </Typography>
        <Typography variant="h6" color="secondary">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions} >
        <div className={classes.buttons}>
          <Button className={classes.customHoverFocus} type="button"  size="small" onClick={()=>onUpdateCartQty(item.id,item.quantity-1)}>-</Button>
          <Typography>{item.quantity}</Typography>
          <Button className={classes.customHoverFocus} type="button" size="small" onClick={()=>onUpdateCartQty(item.id,item.quantity+1)}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => {onRemoveFromCart(item.id)}}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
