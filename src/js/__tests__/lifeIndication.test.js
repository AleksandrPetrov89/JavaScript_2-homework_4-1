import lifeIndication from '../app';

test.each([
  [{ name: 'Маг', health: 51 }, 'healthy'],
  [{ name: 'Лекарь', health: 50 }, 'wounded'],
  [{ name: 'Вор', health: 15 }, 'wounded'],
  [{ name: 'Мечник', health: 14 }, 'critical'],
  [{ name: 'Ошибка', health: 'o' }, 'A mistake in the amount of life'],
])('Персонаж %o', (hero, exp) => {
  expect(lifeIndication(hero)).toBe(exp);
});
