from app.models import player
from app.models import user

class Main(object):
  def __init__(self):
    self.player = player
    self.user = user

  def player_get(self, user_id):
    return self.player.get(user_id)

  def user_get(self, user_id):
    return self.user.get(user_id)
