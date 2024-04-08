import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  return (
    <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 120 }}
          image="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>{info.name}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>
              The weather can be described as {info.weather} and feels like
              &nbsp;
              {info.feels_like}&deg;C
            </p>
            <p>Temprature: {info.temp}&deg;C</p>
            <p>Humidity: {info.humidity}</p>
            <p>Speed: {info.speed} km/hr</p>
            <p>Pressure: {info.pressure}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
