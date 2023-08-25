import { Link, ListItem, Typography } from "@mui/material";

const LinkItem = ({ pageName, url }) => {
  return (
    <ListItem disablePadding>
      <Link href={url} color="inherit" underline="hover" mb={1}>
        <Typography variant="body1" fontWeight={300}>
          {pageName}
        </Typography>
      </Link>
    </ListItem>
  );
};

export default LinkItem;
