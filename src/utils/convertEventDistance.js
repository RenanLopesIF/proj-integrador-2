export function convertEventDistance(distance) {
  if (distance >= 1000) {
    return `${(distance / 1000).toFixed(1)}Km`;
  }

  return `${distance.toFixed(0)}m`;
}
