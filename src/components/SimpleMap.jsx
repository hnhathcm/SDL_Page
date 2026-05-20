import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function SimpleMap() {
  // Coordinates for Saigon Paragon, HCMC
  const position =[10.7294, 106.7218];

  return (
    <MapContainer center={position} zoom={20} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>SonDoong Labs, Saigon Paragon</Popup>
      </Marker>
    </MapContainer>
  );
}