import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

export default function Astrology() {
  return (
    <>
    <div className="Astrology-main">
        <div className="astrology">
            <p id='write'>Astrology posts →</p>
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
        </div>
    </div>
    </>
  )
}
