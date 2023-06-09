import React from "react";
import "../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const position = [17.387140, 78.491684];
const MapModal = (props) => {
  return (
    <>
      {/* <div
        onClick={() => {
          props.onGps(false);
        }}
        className="gps-wrapper"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="map-gps"
        >
           <MapContainer
            className="main-gps"
            center={position}
            dragging={true}
            zoom={15}
            zoomControl={true}
            scrollWheelZoom={true}
            
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>Shop Location</Popup>
            </Marker>
          </MapContainer> 
        </div>
      </div> */}
      <MapContainer
        style={{ width: "100%", height: "100vh" }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MapModal;
