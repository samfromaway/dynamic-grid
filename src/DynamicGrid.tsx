import React from 'react';
import { Grid } from '@mui/material';

type DynamicGridProps = {
  children: React.ReactNode & { length: number };
  maxColumns: { xs: number; sm: number; md: number; lg: number };
  spacing?: number;
  columnSpacing?: number;
  rowSpacing?: number;
};

const ROW_BASE = 12;

export default function DynamicGrid({
  children,
  maxColumns,
  spacing,
  columnSpacing,
  rowSpacing,
}: DynamicGridProps) {
  const gridChildren = React.Children.map(children, (child) => {
    const rowNumber = (columnsNr: number) => {
      if (children.length > columnsNr) {
        return ROW_BASE / columnsNr;
      }
      return ROW_BASE / children.length;
    };

    return (
      <Grid
        item
        xs={rowNumber(maxColumns.xs)}
        sm={rowNumber(maxColumns.sm)}
        md={rowNumber(maxColumns.md)}
        lg={rowNumber(maxColumns.lg)}
      >
        {child}
      </Grid>
    );
  });

  return (
    <Grid
      container
      spacing={spacing}
      columnSpacing={columnSpacing}
      rowSpacing={rowSpacing}
    >
      {gridChildren}
    </Grid>
  );
}
