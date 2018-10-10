import random

from classes.loader import Loader
from classes.town import Town
from libs import generate_planet_name, generate_dungeon_name, generate_dungeon_description

class Planet(Loader):
  def generate(self, planet_id, town_id, zone_max, space, planet_coords, difficulty_max):
    self.id = planet_id + 1
    self.name = generate_planet_name()
    self.height = random.randint(100,5000)
    self.width = random.randint(100,5000)
    self.defaultZone = random.randint(1, zone_max)
    self.towns = []
    self.zones =[]

    self.planetX, self.planetY = self.get_space_coordinates(space, planet_coords)
    self.towns = self.get_towns(town_id)
    print(self.towns)
    self.difficulty = self.get_difficulty(difficulty_max)
    self.dungeons = self.get_dungeons(self.difficulty, difficulty_max, self.height, self.width)

    return self

  def get_towns(self, town_id):
    towns = []
    towns.append(Town().generate(town_id, 0, 0, True).__dict__)

    town_id += 1
    return towns


  def get_difficulty(self, max):
    rand = random.randint(1,100)
    if rand <= 75:
      return random.randint(0, round(max / 2))
    else:
      return random.randint(round(max / 2), max)

  def get_space_coordinates(self, space, planet_coords):
    x = random.randint(0, space.width)
    y = random.randint(0, space.height)

    while x in planet_coords and y in planet_coords[x]:
      x = random.randint(0, width)
      y = random.randint(0, height)

    return x, y

  def get_dungeons(self, planet_diff, max, height, width):
    dungeons = []
    coords = {}

    for d in range(random.randint(0, 100)):
      x = random.randint(0, width)
      y = random.randint(0, height)

      while x in coords and y in coords[x]:
        x = random.randint(0, width)
        y = random.randint(0, height)

      if x not in coords:
        coords[x] = {}

      coords[x][y] = True

      dungeons.append({
        'difficultyMin': planet_diff - 2 if planet_diff >= 2 else 0,
        'difficultyMax': planet_diff + 1 if planet_diff < max else max,
        'depth': random.randint(10, 5000),
        'mobChance': random.randint(0,100),
        'x': x,
        'y': y,
        'name': generate_dungeon_name(),
        'description': generate_dungeon_description()
      })

    return dungeons
