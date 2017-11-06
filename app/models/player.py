from app.models.model import Model

class Player(Model):

  def __init__(self):

    self.subject = ''
    self.msg = ''
    self.sql = ''
    self.last = ''
    self.db = 'site'
    # super(Log, self).__init__()

  def get(self, user_id):
    return self.plain_query('select * from player where user_id = %s' % user_id)

  # def log(self, subject, msg):
  #   connection = self.get_connection()
  #   cursor = connection.cursor()
  #   cursor.execute('INSERT INTO log (subject, msg, created_at) VALUES (%s, %s, NOW())', (subject, msg))

  #   connection.commit()
  #   connection.close()
