import React from 'react'
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

export default function Blogs() {
  return (
    <div className='blog-container'>
      <p id='write'>Latest Write</p>

      <div class="posts">
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

    </div>
  )
}
