import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ImgCard({ title, description }) {
  return (
    <Card>
      <CardMedia component="img" height="200" image="/lion.jpeg" alt="lion" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
