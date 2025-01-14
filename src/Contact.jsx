import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Contact({ contact }) {
  return (
      <Card variant="outlined">
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {contact.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {contact.address}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {contact.contactNumber}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">Edit Contact</Button>
          <Button size="small" variant ="contained" color="error">Delete Contact</Button>
        </CardActions>
      </Card>
  );
}
