const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Attack } = require('../models');
const { db } = require('../db/config');

let attack;

beforeAll(async () => {
  await db.sync({ force: true });
  attack = await Attack.create({
    title: 'Water Bomb',
    mojoCost: 15,
    staminaCost: 10,
  });
});

afterAll(async () => await db.sync({ force: true }));

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id');
  });

  it('has a title', async () => {
    expect(attack.title).toBe('Water Bomb');
  });

  it('has an staminaCost property', async () => {
    expect(attack).toHaveProperty('staminaCost');
  });

  it('has correct staminaCost', async () => {
    expect(attack.staminaCost).toBe(10);
  });

  it('has an mojoCost property', async () => {
    expect(attack).toHaveProperty('mojoCost');
  });

  it('has correct mojoCost', async () => {
    expect(attack.mojoCost).toBe(15);
  });
  
});