import React, { forwardRef } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

const Blogs = forwardRef((props, ref) => {  
  return (
    <div className="blog-container" ref={ref}>
      <p id="write">Latest Writes →</p>

      <div className="posts">

                {/* post 3 */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
              <CardMedia
              component="img"
              sx={{ width: '100%', height: '140px' }}
              image='https://blogger.googleusercontent.com/img/a/AVvXsEgVvsKKKyPsRwtMKP91rex8974HArtCl7rUGV-4dubq1ac6kSmzIeU0UNmzLJOfUIWt_QJItads-nUJTfZp7xkwg65yf8Vos7hA1rUc3kzNonC_GBS37-1OEB9Ps6CQkoBcAXeNCo0GNOMMylpNx9HBkx11KHKC7LolBEGCEy8COao7wqTvtiLNPgqvnBo_=w640-h366'
              alt="Vishant Netke"
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

        {/* Post 1 */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "140px" }}
              image="https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Galaxy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                The Astrology: Unveiling the Effect of Stars and Destiny
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Since ancient times, humanity has gazed at the stars, seeking meaning in their silent yet profound presence...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <a href="https://iamvishant.blogspot.com/2025/02/the-astrology-unveiling-effect-of-stars.html" target="_blank" rel="noopener noreferrer">
              <Button size="small" color="primary">Read More</Button>
            </a>
          </CardActions>
        </Card>


        {/* post 2 */}
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

      <a href="https://iamvishant.blogspot.com/" id="write2" target="about_blank">
        <p>Unlock More Wisdom!</p>
      </a>
    </div>
  );
});

export default Blogs;