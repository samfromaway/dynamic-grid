import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { data1, data2, data3, data4, data5 } from '../src/data';
import DynamicFlexGrid from '../src/DynamicGrid';
import ImgCard from '../src/ImgCard';

const Home: NextPage = () => {
  const dynamicGridProps = {
    maxColumns: { xs: 1, sm: 2, md: 5, lg: 5 },
    spacing: 4,
    fullWidth: false,
  };

  return (
    <Container>
      <DynamicFlexGrid {...dynamicGridProps}>
        {data1.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicFlexGrid>
      <Box p={5} />
      <DynamicFlexGrid {...dynamicGridProps}>
        {data2.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicFlexGrid>
      <Box p={5} />
      <DynamicFlexGrid {...dynamicGridProps}>
        {data3.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicFlexGrid>
      <Box p={5} />
      <DynamicFlexGrid {...dynamicGridProps}>
        {data4.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicFlexGrid>
      <Box p={5} />
      <DynamicFlexGrid {...dynamicGridProps}>
        {data5.map((e) => (
          <ImgCard key={e} title={e} description={e} />
        ))}
      </DynamicFlexGrid>
    </Container>
  );
};

export default Home;
