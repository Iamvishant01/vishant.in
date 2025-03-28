import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';

export default function Learnings() {
  return (
    <>
    <div className="Astrology-main">
    <p id='write'>The Learnings →</p>
        <div className="astrology">
            {/* post1 */}
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    sx={{ width: '100%', height: '140px' }}
                    image='https://blogger.googleusercontent.com/img/a/AVvXsEgVvsKKKyPsRwtMKP91rex8974HArtCl7rUGV-4dubq1ac6kSmzIeU0UNmzLJOfUIWt_QJItads-nUJTfZp7xkwg65yf8Vos7hA1rUc3kzNonC_GBS37-1OEB9Ps6CQkoBcAXeNCo0GNOMMylpNx9HBkx11KHKC7LolBEGCEy8COao7wqTvtiLNPgqvnBo_=w640-h366'
                    alt="Galaxy"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    The Fruit of Youth - A Message for Teenagers
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Once, there lived a sage who meditated on the banks of the river Shipra for several years. As a result of his penance, he received a special gift-a mango with a shiny seed inside. 
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href="https://iamvishant.blogspot.com/2025/02/the-fruit-of-youth-message-for-teenagers.html" target='about_blank'>
                    <Button size="small" color="primary">
                    Read More
                    </Button>
                    </a>
                </CardActions>
            </Card>

            {/* post 2 */}
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                <CardMedia
                    component="img"
                    sx={{ width: "100%", height: "140px" }}
                    image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi85-XxATlVnePts0dLZINFEuZOaOWdO4tEBlQvGsQeNG5H459H_nnRKC9a4-I0NTydYJKA7iT_sE41kPr6dJi3hhCdYiHsmkVylTpesyLWjS16c8iQSwIW_xZhAW6NwmMulP31PKW1MblNaM48KuYK2ou9qO6C_vPyCgRtFRXrcvQjBQb578I1kl7Cdmi9/s16000/blog2.webp"
                    alt="Galaxy"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                    Footsteps of Wisdom: Lessons from My Journey
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Back in January, I went on an exciting trip to Nashik with my friends. We had been planning it for a while, even before our exams wrapped up. To make the journey even more fun, we decided to take the train ...
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <a href="https://iamvishant.blogspot.com/2025/03/footsteps-of-wisdom-lessons-from-my.html" target="_blank" rel="noopener noreferrer">
                    <Button size="small" color="primary">Read More</Button>
                </a>
                </CardActions>
            </Card>
        </div>
    </div>
    </>
  )
}
