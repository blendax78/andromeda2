from app.models.model import Model

class Log(Model):

  def __init__(self):
    self.subject = ''
    self.msg = ''
    self.sql = 'SELECT * FROM log'
    self.last = 'SELECT * FROM log ORDER BY id DESC LIMIT 1'
    self.db = 'site'

  def log(self, subject, msg):
    connection = self.get_connection()
    cursor = connection.cursor()
    cursor.execute('INSERT INTO log (subject, msg, created_at) VALUES (%s, %s, NOW())', (subject, msg))

    connection.commit()
    connection.close()
