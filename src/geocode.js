import axios from "axios";

/**
 * Place name for geocode lookup on openstreetmap database via Nominatim
 * Returns coordinates in [lat,lon]
 * @param {string} place
 */

export const getCoordinatesforPlace = place => {
  axios
    .get(
      `https://nominatim.openstreetmap.org/search/${place}format=geojson&addressdetails=1&limit=1`
    )
    .then(response => {
      return response.features[0].geometry.coordinates;
    })
    .catch(err => {
      console.warn(err);
    });
};
