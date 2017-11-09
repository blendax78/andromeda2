from app.models.model import Model

class Player(Model):

  def __init__(self):
    super().__init__()

  def get(self, user_id):
    return self.plain_query('select * from player where user_id = %s' % user_id)

  def set(self, player_id, data):
    # self.plain_query("update player set json = '%s' where id = %s" % (data, player_id))
    return True
