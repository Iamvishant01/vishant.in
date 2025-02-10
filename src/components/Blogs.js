import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

export default function Blogs() {
  return (
    <div className='blog-container'>
      <p id='write'>Latest Writes →</p>

      <div class="posts">
                {/* posts0 */}
                <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
              <CardMedia
              component="img"
              sx={{ width: '100%', height: '140px' }}
              image='https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="Galaxy"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              The Astrology : Unveiling the effect of Stars and Destiny
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Since ancient times, humanity has gazed at the stars, seeking meaning in their silent yet profound presence. Across civilizations, from the Vedic seers of India to the philosophers of Greece, astrology has been regarded as a bridge between the cosmic and the earthly.              </Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <a href="https://iamvishant.blogspot.com/2025/02/the-astrology-unveiling-effect-of-stars.html" target='about_blank'>
              <Button size="small" color="primary">
              Read More
              </Button>
              </a>
          </CardActions>
        </Card>

        {/* posts1 */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
              <CardMedia
              component="img"
              sx={{ width: '100%', height: '140px' }}
              image='https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="Vishant Netke"
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Vishant Netke: The Journey
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              In a world driven by technology and creativity, some individuals stand out by blending both seamlessly. I am Vishant Netke—an entrepreneur, a developer, and a storyteller. My journey has been one of exploration, learning, and building things that matter.
              </Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <a href="https://iamvishant.blogspot.com/2025/02/vishant-netke-journey-of-innovation.html" target='about_blank'>
              <Button size="small" color="primary">
              Read More
              </Button>
              </a>
          </CardActions>
        </Card>
      </div>

      <a href="https://iamvishant.blogspot.com/" id='write2'><p >Unlock More Wisdom !</p></a>
    </div>
  )
}
