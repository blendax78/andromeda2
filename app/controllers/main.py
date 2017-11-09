from app.models import player
from app.models import user
from app.models import skill
from app.models import inventory

import json
import re

class Main(object):
  def __init__(self):
    self.player = player
    self.user = user
    self.skill = skill
    self.inventory = inventory

########## PLAYER ##########

  def player_get(self, user_id):
    user_id = re.escape(user_id)
    return self.player.get(user_id)

  def player_set(self, player_id, data={}):
    player_id = re.escape(player_id)
    json_data = json.dumps(data)

    return self.player.set(player_id, json_data)

########## SKILL ##########

  def skill_get(self, player_id):
    player_id = re.escape(player_id)

    result = self.skill.get(player_id)
    result['object'] = json.loads(result['json'])

    return result

  def skill_set(self, player_id, data={}):
    player_id = re.escape(player_id)
    json_data = json.dumps(data)

    return self.skill.set(player_id, json_data)

########## INVENTORY ##########

  def inventory_get(self, player_id):
    player_id = re.escape(player_id)

    result = self.inventory.get(player_id)
    result['object'] = json.loads(result['json'])

    return result

  def inventory_set(self, player_id, data={}):
    player_id = re.escape(player_id)
    json_data = json.dumps(data)

    return self.inventory.set(player_id, json_data)

########## USER ##########

  def user_get(self, user_id):
    user_id = re.escape(user_id)
    return self.user.get(user_id)

  def user_set(self, user_id, data={}):
    user_id = re.escape(user_id)
    json_data = json.dumps(data)

    return self.user.set(user_id, json_data)
