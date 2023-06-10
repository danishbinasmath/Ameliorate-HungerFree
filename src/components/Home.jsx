import * as React from 'react';
import './design.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SearchIconWrapper from '@mui/icons-material/Search';
import StyledInputBase from '@mui/material/InputBase';
import BadgeIcon from '@mui/icons-material/Badge';

const Home = () => {
  return (
    <>
    
    <div>
        <h1 className='heading'>Ameliorate HungerFree</h1>
    </div>

    <div className="search-input-container">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          style={{ backgroundColor: 'white' }}
        />
    </div>

    <div className="cards-container"> 
        <Card className='card' sx={{ maxWidth: 1000 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ background: 'linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
                <BadgeIcon /> Robin Hood Army
              </Typography>
              <Typography gutterBottom variant="h6" component="div" style={{ color: 'red' }}>
                  <LocationOnIcon /> Ahmedabad Bhubaneshwar Chandigarh Indore Jaipur Kochi Lucknow Nashik Nagpur Patna Pune Surat
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Robin Hood Army undertakes leftover food collection from restaurants with whom they have tied up. The food is served by RHA's volunteers to the homeless and hungry located in the vicinity of each particular restaurant. This service is operational on Sundays.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <ContactPhoneIcon/> Ahmedabad: 94273 03491, Bhubaneshwar: 94398 66298, Chandigarh: 86999 60557, Indore: 81098 10100, Jaipur: 78778 93007, Kochi: 85928 37067, Lucknow: 94154 00415, Nashik: 86689 36048, Nagpur: 82378 87343, Patna: 90062 44267, Pune: 98222 92800, Surat: 89719 66164
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <ScreenShareIcon/> Visit <a href="https://www.robinhoodarmy.com" target="_blank" rel="noopener noreferrer">robinhoodarmy.com</a> for more information.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </div>

    <div className="cards-container"> 
        <Card className='card' sx={{ maxWidth: 1000, backgroundColor: '' }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{ background: 'linear-gradient(45deg, #FF512F 0%, #F09819 51%, #FF512F 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
                <BadgeIcon /> Feeding India by Zomato
              </Typography>
              <Typography gutterBottom variant="h6" component="div" style={{ color: 'red' }}>
                  <LocationOnIcon /> Agra Ahmedabad Bhubaneswar Chennai Coimbatore Delhi-NCR Goa Hyderabad Jaipur Kolkata Lucknow Ludhiana Nagpur Patna Surat Visakhapatnam
              </Typography>
              <Typography variant="body2" color="text.secondary">
              They access excess leftover food from restaurants and caterers in order to provide food to the poor kids and adults.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <ContactPhoneIcon/> 98711 78810
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <ScreenShareIcon /> Visit <a href="https://www.feedingindia.org" target="_blank" rel="noopener noreferrer">feedingindia.org</a> for more information.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </div>

    </>
  );
};

export default Home;
