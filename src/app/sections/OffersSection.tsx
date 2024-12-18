import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const OffersSection: React.FC = () => {
  return (
    <Box component="section" py={4}>
      <Toolbar></Toolbar>
        <Typography variant="h2">Offers</Typography>
    </Box>
  )
}
