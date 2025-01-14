import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Contact({ contact, deleteContact }) {

  function handleDelete(id) {
    deleteContact(id);
  }

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
          <Button 
          size="small" 
          variant ="contained" 
          color="error" 
          onClick={() => handleDelete(contact.id)}
          >
            Delete Contact</Button>
        </CardActions>
      </Card>
  );
}
