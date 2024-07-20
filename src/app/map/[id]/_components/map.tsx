"use client";
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const libraries = ['places'] as any;

interface MapProps {
  location: google.maps.LatLngLiteral;
}

const Map: React.FC<MapProps> = ({ location }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      zoom={10}
      center={location}
      onLoad={(map) => setMap(map)}
    >
      <Marker position={location} />
    </GoogleMap>
  );
};

export default Map;
