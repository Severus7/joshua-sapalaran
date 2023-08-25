import { List, Link, ListItem, Typography } from "@mui/material";

const ConnectLinks = () => {
  return (
    <List>
      <ListItem disablePadding>
        <Typography variant="body2" mb={2} fontWeight={800}>
          CONNECT
        </Typography>
      </ListItem>
      <ListItem disablePadding>
        <Link href="#" color="inherit" underline="hover" mb={1}>
          <Typography variant="body1" fontWeight={300}>
            Blog
          </Typography>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link href="#" color="inherit" underline="hover" mb={1}>
          <Typography variant="body1" fontWeight={300}>
            Email
          </Typography>
        </Link>
      </ListItem>
      <ListItem disablePadding>
        <Link href="#" color="inherit" underline="hover" mb={1}>
          <Typography variant="body1" fontWeight={300}>
            Newsletter
          </Typography>
        </Link>
      </ListItem>
    </List>
  );
};

export default ConnectLinks;
