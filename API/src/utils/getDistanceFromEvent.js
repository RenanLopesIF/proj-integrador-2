import axios from 'axios';

export default async function (arrEvent, userGeolocation) {
  const promises = [];

  for (const event of arrEvent) {
    const promise = axios
      .get(
        `https://routing.openstreetmap.de/routed-car/route/v1/driving/${userGeolocation.lng},${userGeolocation.lat};${event.longitude},${event.latitude}?overview=false&geometries=polyline`,
      )
      .then((res) => {
        event.distancia = res.data.routes[0].distance;
        return event;
      });
    promises.push(promise);
  }

  const responses = await Promise.allSettled(promises);
  const result = responses.map((resp) => resp.value);
  return result;
}
