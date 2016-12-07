import heroes from '../mocks/Heroes.json';

export const heroById = {};
for (const hero of heroes) {
  heroById[hero.id] = hero;
}
