from app.models.model import Model
import re

class User(Model):

  def __init__(self):

    self.subject = ''
    self.msg = ''
    self.sql = ''
    self.last = ''
    self.db = 'andromeda2'

  def get(self, user_id):
    user_id = re.escape(user_id)
    return self.plain_query('select * from user where id = %s' % user_id)

  def set(self, user_id, data):
    # self.plain_query("update user set json = '%s' where id = %s" % (data, user_id))
    return True
