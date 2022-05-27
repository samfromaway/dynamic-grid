import React from 'react';
import { Grid } from '@mui/material';

type MaxColumns = { xs: number; sm: number; md: number; lg: number };

type DynamicFlexGridProps = {
  children: React.ReactNode & { length: number };
  maxColumns: { xs: number; sm: number; md: number; lg: number };
  fullWidth?: boolean;
  spacing?: number;
  columnSpacing?: number;
  rowSpacing?: number;
};

const ROW_BASE = 12;

export default function DynamicFlexGrid({
  children,
  maxColumns,
  spacing,
  columnSpacing,
  rowSpacing,
  fullWidth,
}: DynamicFlexGridProps) {
  const gridChildren = React.Children.map(children, (child) => {
    const rowNumber = (columnsNr: number) => {
      if (fullWidth) {
        if (children.length > columnsNr) {
          return ROW_BASE / columnsNr;
        }
        return ROW_BASE / children.length;
      }
      return undefined;
    };

    const width = (maxColumns: MaxColumns) => {
      if (fullWidth) return undefined;
      return [
        1 / maxColumns.xs,
        1 / maxColumns.sm,
        1 / maxColumns.md,
        1 / maxColumns.lg,
      ];
    };

    return (
      <Grid
        item
        xs={rowNumber(maxColumns.xs)}
        sm={rowNumber(maxColumns.sm)}
        md={rowNumber(maxColumns.md)}
        lg={rowNumber(maxColumns.lg)}
        width={width(maxColumns)}
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
