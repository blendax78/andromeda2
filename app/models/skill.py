from app.models.model import Model

class Skill(Model):

  def __init__(self):
    super().__init__()

  def get(self, player_id):
    return self.plain_query('select * from skill where player_id = %s' % player_id)
