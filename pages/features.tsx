import { Box, Container } from '@mui/material';
import type { NextPage } from 'next';
import { data1, data2, data3, data4, data5 } from '../src/data';
import DynamicGrid from '../src/DynamicGrid';
import Feature from '../src/Feature';

const Features: NextPage = () => {
  const dynamicGridProps = {
    maxColumns: { xs: 1, sm: 2, md: 2, lg: 4 },
    spacing: 4,
    fullWidth: false,
    rowStartAlignment: 'center' as 'center',
  };

  return (
    <Container>
      <DynamicGrid {...dynamicGridProps}>
        {data1.map((e, index) => (
          <Feature
            key={e}
            title={e}
            description={e}
            subTitle={index === 2 ? 'some title' : undefined}
          />
        ))}
      </DynamicGrid>
      <Box p={5} />
      <DynamicGrid {...dynamicGridProps}>
        {data2.map((e, index) => (
          <Feature
            key={e}
            title={e}
            description={e}
            subTitle={index === 2 ? 'some title' : undefined}
          />
        ))}
      </DynamicGrid>
      <Box p={5} />
      <DynamicGrid {...dynamicGridProps}>
        {data3.map((e, index) => (
          <Feature
            key={e}
            title={e}
            description={e}
            subTitle={index === 2 ? 'some title' : undefined}
          />
        ))}
      </DynamicGrid>
      <Box p={5} />
      <DynamicGrid {...dynamicGridProps}>
        {data4.map((e, index) => (
          <Feature
            key={e}
            title={e}
            description={e}
            subTitle={index === 2 ? 'some title' : undefined}
          />
        ))}
      </DynamicGrid>
      <Box p={5} />
      <DynamicGrid {...dynamicGridProps}>
        {data5.map((e, index) => (
          <Feature
            key={e}
            title={e}
            description={e}
            subTitle={index === 2 ? 'some title' : undefined}
          />
        ))}
      </DynamicGrid>
    </Container>
  );
};

export default Features;
