from app.models.model import Model
import re

class Player(Model):

  def __init__(self):

    self.subject = ''
    self.msg = ''
    self.sql = ''
    self.last = ''
    self.db = 'andromeda2'

  def get(self, user_id):
    user_id = re.escape(user_id)

    return self.plain_query('select * from player where user_id = %s' % user_id)
