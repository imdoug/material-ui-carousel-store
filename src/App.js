import './App.css';

import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Box, Typography } from '@material-ui/core'
import playstation from './assets/playstation-5.png'
import xbox from './assets/xbox.png'
import switchLogo from './assets/nintendo.png'


function App({}) {

  var items = [
    {
        name: "Playstation 5",
        subName: 'Play has no limits',
        description: "PS5 and PS5 Digital Edition deliver lightning-fast loading, deeper immersion, and an all-new generation of incredible PlayStation games",
        price: '$499.90',
        img: playstation,
    },
    {
        name: "XBOX SERIES X",
        subName: 'The Fastest',
        description: "PS5 and PS5 Digital Edition deliver lightning-fast loading, deeper immersion, and an all-new generation of incredible PlayStation games",
        price: '$399.90',
        img: xbox
    },
    {
      name: "Nintendo Switch ",
      subName: "OLED Model",
      description: "PS5 and PS5 Digital Edition deliver lightning-fast loading, deeper immersion, and an all-new generation of incredible PlayStation games",
      price: '$349.99',
      img : switchLogo
  }
  ]

  const Item = (props) =>{
    return (
      <Paper style={{height: '350px', marginTop: '100px', display: 'flex', background: '#F5F5F5', borderRadius: '32px'}} >
        <Box style={{width: '45%', padding: '20px', marginLeft: '60px'}}>
          <Typography style={{fontWeight: '700', color: '#424241', fontFamily: 'Play'}}variant='h3'>{props.item.name}</Typography>
          <Typography style={{fontWeight: '700', color: '#424241', fontFamily: 'Play'}}variant='h3'>{props.item.subName}</Typography>
          <Typography style={{fontSize: '20px', color: '#A7A7A7', fontFamily: 'Poppins', marginTop: '10px'}}variant='body2'>{props.item.description}</Typography>
          <Typography style={{fontWeight: '900', color: '#0371E2', marginTop: '10px'}}variant='h4'>{props.item.price}</Typography>
          <Button style={{background: '#0371E2', color: '#FFF', padding: '5px 20px', marginTop: '10px'}} className="CheckButton">
              Add to Bag
          </Button>
        </Box>
        <Box style={{width: '50%',display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
          <img style={{width: '75%',}} src={props.item.img}></img>
        </Box>
      </Paper>
  )
  }
  
  return (
    <div style={{width: '90%',margin: '0 auto',height: '400px'}}>
        <Carousel >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
        </Carousel>
    </div>
  );
}

export default App;
