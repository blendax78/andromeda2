import os
# import logging

class Config(object):

  def __init__(self):
    self.db = {
      'db': 'andromeda'
    }
    self.log_file = '/home/blendax/www/log/python/andromeda2.log'
    self.config_file = '/home/blendax/www/lib/digitalocean.ini'
    
    self.auth_url = 'http://auth.vintimilla.org/login';

  def log(self, subject, message):
    print(subject, message)
    return True

  def set_db_config():
    config = get_config()

    db = config[self.db['db']]
    self.db = db
    return db

  def get_config():
    config = None

    if os.path.isfile(self.log_file):
     config = configparser.ConfigParser()
     config.read(self.config_file)

    return config

# def get_connection():
#   db = get_db_config()
#   # Connect to the database
#   connection = pymysql.connect(host=db['host'],
#                              user=db['user'],
#                              passwd=db['pass'],
#                              db=db['db'],
#                              charset='utf8mb4',
#                              cursorclass=pymysql.cursors.DictCursor)
#   return connection

# log_file = '/home/blendax/www/log/python/api.log'
# if os.path.isfile(log_file):
#   logger = logging.getLogger('app')
#   handler = logging.FileHandler(log_file)
#   formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
#   handler.setFormatter(formatter)
#   logger.addHandler(handler)
#   logger.setLevel(logging.DEBUG)