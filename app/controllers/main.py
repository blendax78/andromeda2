from app.models import player
from app.models import user
from app.models import skill
from app.models import inventory
from app.models import bank

import json
import re

class Main(object):
  def __init__(self):
    self.player = player
    self.user = user
    self.skill = skill
    self.bank = bank
    self.inventory = inventory

########## PLAYER ##########

  def player_get(self, user_id):
    user_id = re.escape(user_id)
    return self.player.get(user_id)

  def player_set(self, player_id, data={}):
    player_id = re.escape(player_id)

    return self.player.set(player_id, data)

########## SKILL ##########

  def skill_get(self, player_id):
    player_id = re.escape(player_id)

    result = self.skill.get(player_id)
    result['object'] = json.loads(result['json'])

    return result

  def skill_set(self, player_id, data={}):
    player_id = re.escape(player_id)

    # Input should already be in json format
    # json_data = json.dumps(data)

    return self.skill.set(player_id, data)

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

########## BANK ##########

  def bank_get(self, player_id):
    player_id = re.escape(player_id)

    result = self.bank.get(player_id)
    result['object'] = json.loads(result['json'])

    return result

  def bank_set(self, player_id, data={}):
    player_id = re.escape(player_id)
    json_data = json.dumps(data)

    return self.bank.set(player_id, json_data)

########## USER ##########

  def user_get(self, token):
    token = re.escape(token)
    return self.user.get(token)

  def user_set(self, user_id, data={}):
    user_id = re.escape(user_id)
    json_data = json.dumps(data)

    return self.user.set(user_id, json_data)
