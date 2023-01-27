import { useState } from 'react';

import {
  Container,
  Grid,
  Button
} from '@mui/material';

import NewItemModal from 'components/elements/modals/NewItemModal';

export default function Home() {
  const [isNewItemModalOpen, setIsNewItemModalOpen] = useState(false);
  return (
    <Container>
      <Grid>
        <Grid item>
          <Button onClick={() => setIsNewItemModalOpen(true)}>Open</Button>
        </Grid>
      </Grid>
      <NewItemModal open={isNewItemModalOpen} onClose={() => setIsNewItemModalOpen(false)} />
    </Container>
  );
}