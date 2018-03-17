from app.models.model import Model

class Bank(Model):

  def __init__(self):
    super().__init__()

  def get(self, player_id):
    return self.plain_query('select * from bank where player_id = %s' % player_id)

  def set(self, player_id, data):
    self.plain_query("update bank set json = '%s' where player_id = %s" % (data, player_id))
    return True
