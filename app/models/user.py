from app.models.model import Model
import re

class User(Model):

  def __init__(self):

    self.subject = ''
    self.msg = ''
    self.sql = ''
    self.last = ''
    self.db = 'andromeda2'

  def get(self, token):
    return self.plain_query("select u.*, p.id as player_id from user u join player p on u.id = p.user_id where u.token = '%s'" % token)

  def set(self, user_id, data):
    # self.plain_query("update user set json = '%s' where id = %s" % (data, user_id))
    return True
