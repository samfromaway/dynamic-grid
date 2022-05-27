import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { data1, data2, data3, data4, data5 } from '../src/data';
import DynamicGrid from '../src/DynamicGrid';
import ImgCard from '../src/ImgCard';

const Home: NextPage = () => {
  const dynamicGridProps = {
    maxColumns: { xs: 1, sm: 2, md: 5, lg: 5 },
    spacing: 4,
    fullWidth: false,
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
