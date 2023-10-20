export default function lifeIndication(hero) {
  if (hero.health > 50) {
    return 'healthy';
  }
  if (hero.health > 14) {
    return 'wounded';
  }
  if (hero.health < 15) {
    return 'critical';
  }
  return 'A mistake in the amount of life';
}
