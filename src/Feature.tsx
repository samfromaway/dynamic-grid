import AttributionIcon from '@mui/icons-material/Attribution';
import { Box, Typography } from '@mui/material';

type FeatureProps = { title: string; description: string; subTitle?: string };

export default function Feature({
  title,
  subTitle,
  description,
}: FeatureProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      // sx={{ backgroundColor: 'gray' }}
    >
      <AttributionIcon fontSize="large" />
      <Box p={1} />
      <Typography gutterBottom>{title}</Typography>
      {subTitle && <Typography gutterBottom>{subTitle}</Typography>}

      <Typography>{description}</Typography>
    </Box>
  );
}
