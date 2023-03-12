import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
// import Movies from "./Movies.json"
import "./Product.css"

const Product = ({product}) => {
    console.log("product",product)
  return (
    <div className='container'>
       <Card sx={{ maxWidth: 170 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        // image={require(`../assets/image/${product.image}`)}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {Movies.discription} */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Product
