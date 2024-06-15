import React, { createRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "./Map.css";

mapboxgl.accessToken =
  proccess.env.TOKEN;

const LOCATION = [-48.487413, -1.43125];
const MARKERS = [
  [-48.487413, -1.43125], // Ponto 1
  [-48.4879579, -1.4279468], // Ponto 2
];

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapElement = createRef();
    this.state = {
      markers: [],
      directions: null,
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapElement.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: LOCATION,
      zoom: 15,
    });

    this.map.on("load", () => {
      // Adicionar marcadores fixos
      const fixedMarkers = MARKERS.map((coords) => {
        return new mapboxgl.Marker().setLngLat(coords).addTo(this.map);
      });

      this.setState({ markers: fixedMarkers }, this.route);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  route = () => {
    const { markers, directions } = this.state;

    if (markers.length < 2) return;

    if (directions) {
      this.map.removeControl(directions);
      this.removeDirectionsLayer();
    }

    const locations = markers.map((marker) => marker.getLngLat());
    const newDirections = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      profile: "mapbox/driving",
      language: "pt-BR",
    });

    this.map.addControl(newDirections, "top-left");

    newDirections.setOrigin([locations[0].lng, locations[0].lat]);
    newDirections.setDestination([locations[1].lng, locations[1].lat]);

    this.setState({ directions: newDirections });
  };

  removeDirectionsLayer = () => {
    const layers = [
      "directions-route-line-alt",
      "directions-route-line-casing",
      "directions-route-line",
      "directions-hover-point-casing",
      "directions-hover-point",
      "directions-waypoint-point-casing",
      "directions-waypoint-point",
    ];

    layers.forEach((layer) => {
      if (this.map.getLayer(layer)) {
        this.map.removeLayer(layer);
      }
    });

    if (this.map.getSource("directions")) {
      this.map.removeSource("directions");
    }
  };

  render() {
    return <div ref={this.mapElement} className="mapDiv" />;
  }
}

export default Map;
