from app.models.model import Model

class Player(Model):

  def __init__(self):
    super().__init__()

  def get(self, user_id):
    return self.plain_query('select * from player where user_id = %s' % user_id)
