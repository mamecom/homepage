import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function MyselfPaper() {
  return (
    <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
          p: 2,
          maxWidth: 1400,
          minWidth: 300,
          m:2,
        }}
      >
        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}></Box>

        <Box
          sx={{
            color: 'success.dark',
            display: 'inline',
            fontWeight: 'bold',
            mx: 0.5,
            fontSize: 14,
          }}
        >
          +18.77%
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 14 }}>
          vs. last week
        </Box>
      </Box>
  );
}