from app.models import player

class Main(object):
  def __init__(self):
    self.player = player

  def player_get(self, user_id):
    return self.player.get(user_id)

  def test(self):
    print('test')
  # def log(self, subject='', msg=''):
  #   log = LogModel()
  #   log.log(subject, msg)
  #   return True

