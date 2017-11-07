from app.models.model import Model

class Inventory(Model):

  def __init__(self):
    super().__init__()

  def get(self, player_id):
    return self.plain_query('select * from inventory where player_id = %s' % player_id)

  def set(self, player_id, data):
    self.plain_query("update inventory set json = '%s' where player_id = %s" % (data, player_id))
    return True
