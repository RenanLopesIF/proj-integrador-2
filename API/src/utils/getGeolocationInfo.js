import axios from 'axios';

async function getGeolocationInfo({ lat, lng }) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;
  const { data, status } = await axios.get(url);

  return { data, status };
}

export default getGeolocationInfo;
