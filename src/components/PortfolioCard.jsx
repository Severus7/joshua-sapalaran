import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { FavoriteBorderOutlined, Link } from "@mui/icons-material";

const PortfolioCard = ({ title, alt, image, description, url }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={url}>
        <CardHeader
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={title}
        />
        <CardMedia component="img" height="194" image={image} alt={alt} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlined />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default PortfolioCard;
