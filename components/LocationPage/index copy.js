import React, { useEffect, useState } from 'react';

const LocationPage = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    getUserLocation();
  }, []);

  useEffect(() => {
    const getAddressFromCoordinates = async () => {
      if (latitude && longitude) {
        try {
          const apiKey = 'AIzaSyBZmJAJ8siIV8Vs5ZjgpirhBxX8BRtp1iM'; // Replace with your Google Maps API key
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
          );
          const data = await response.json();
          if (data.results.length > 0) {
            setAddress(data.results[0].formatted_address);
          }
        } catch (error) {
          console.error('Error getting address:', error);
        }
      }
    };

    getAddressFromCoordinates();
  }, [latitude, longitude]);

  return (
    <div>
      {latitude && longitude && (
        <div>
          <h1>Current Location</h1>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}

      {address && (
        <div>
          <h1>Current Address</h1>
          <p>{address}</p>
        </div>
      )}
    </div>
  );
};

export default LocationPage;
