import { Modal, Box, TextField, Grid, Button } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 2,
  p: 4,
};


export default function NewItemModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={style}>
        <Grid>
          <Grid item>
            <TextField fullWidth id="programName" label="Name" />
          </Grid>
          <Grid item>
            <TextField fullWidth id="programMemberId" label="Member ID" />
          </Grid>
          <Grid item>
            <Button variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}