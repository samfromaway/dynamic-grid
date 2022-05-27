import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import type { NextPage } from 'next';
import DynamicGrid from '../src/DynamicGrid';

const data1 = ['hi'];
const data2 = ['hi', 'ho'];
const data3 = ['hi', 'ho', 'ha'];
const data4 = ['hi', 'ho', 'ha', 'hu'];
const data5 = ['hi', 'ho', 'ha', 'hu', 'he'];

function ImgCard({ title, description }) {
  return (
    <Card sx={{ maxWidth: '300px' }}>
      <CardMedia
        component="img"
        height="200"
        image="/lion.jpeg"
        alt="green iguana"
      />
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

const Home: NextPage = () => {
  const dynamicGridProps = {
    maxColumns: { xs: 1, sm: 2, md: 3, lg: 4 },
    spacing: 4,
  };

  return (
    <Container>
      <DynamicGrid {...dynamicGridProps}>
        {data1.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicGrid>
      <Box p={5} />
      <DynamicGrid {...dynamicGridProps}>
        {data2.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicGrid>
      <Box p={5} />
      <DynamicGrid {...dynamicGridProps}>
        {data3.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicGrid>
      <Box p={5} />
      <DynamicGrid {...dynamicGridProps}>
        {data4.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicGrid>
      <Box p={5} />
      <DynamicGrid {...dynamicGridProps}>
        {data5.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicGrid>
    </Container>
  );
};

export default Home;
