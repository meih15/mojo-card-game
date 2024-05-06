const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Deck, Card } = require('../models');
const { db } = require('../db/config');

let deck;
let card1;
let card2;

beforeAll(async () => {
  await db.sync({ force: true });
  deck = await Deck.create({
    name: 'Water Deck',
    xp: 500,
  });

  card1 = await Card.create({
    name: 'Squirtle',
    mojo: 100,
    stamina: 80,
    imgUrl: 'squirtle.img',
  });

  card2 = await Card.create({
    name: 'Piplup',
    mojo: 200,
    stamina: 100,
    imgUrl: 'piplup.img',
  });

  await deck.setCards([card1, card2]);
  console.log(deck);
});

afterAll(async () => await db.sync({ force: true }));

describe('Deck', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id');
  });

  it('has a name', async () => {
    expect(deck.name).toBe('Water Deck');
  });

  it('has an xp property', async () => {
    expect(deck).toHaveProperty('xp');
  });

  it('has a one to many association with Card', () => {
    expect(card1).toHaveProperty('DeckId');
  });
});