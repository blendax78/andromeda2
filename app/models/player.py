from app.models.model import Model
import json

class Player(Model):

  def __init__(self):
    super().__init__()

  def get(self, user_id):
    return self.plain_query('select * from player where user_id = %s' % user_id)

  def set(self, player_id, data):
    int_fields = ['planet_id', 'x', 'y', 'hp', 'mp', 'stamina', 'strength', 'intelligence', 'dexterity', 'credits']
    query = 'update player set '

    for field in int_fields:
      query += '%s = %i,' % (field, int(data[field]))

    query += "score = '%s', status= '%s'" % (json.dumps(data['score']), json.dumps(data['status']))
    # Remove trailing comma
    query += ' where id = %i' % int(player_id)

    self.plain_query(query)
    return True
