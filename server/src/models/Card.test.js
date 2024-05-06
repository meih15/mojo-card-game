const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Card } = require('../models');
const { db } = require('../db/config');

let card;

beforeAll(async () => {
  await db.sync({ force: true });
  card = await Card.create({
    name: 'Squirtle',
    mojo: 100,
    stamina: 80,
    imgUrl: "squirtle.img"
  });
});

afterAll(async () => await db.sync({ force: true }));

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id');
  });

  it('has a name', async () => {
    expect(card.name).toBe('Squirtle');
  });

  it('has correct mojo', async () => {
    expect(card.mojo).toBe(100);
  });

  it('has coorect stamina', async () => {
    expect(card.name).toBe(80);
  });

  it('has correct image url', async () => {
    expect(card.imgUrl).toBe('squirtle.img');
  });

});