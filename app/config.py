import os
import logging

class Config(object):

  def __init__(self):
    self.db = {
      'db': 'andromeda'
    }
    self.log_file = '/home/blendax/www/log/python/andromeda2.log'
    self.config_file = '/home/blendax/www/lib/digitalocean.ini'
    self.auth_url = 'https://auth.vintimilla.org/login';
    self.site_url = 'https://andromeda.vintimilla.org'
    logging.basicConfig(
      format='%(asctime)s: %(message)s',
      datefmt='%m/%d/%Y %I:%M:%S %p',
      filename=self.log_file,
      level=logging.DEBUG
    )

  def log(self, message):
    logging.debug(message)
    return True

  def error(self, message):
    logging.error(message)
    return True

  def get_db_config():
    if 'host' not in db:
      config = get_config()
      self.db = config[self.db['db']]

    return self.db

  def get_config():
    config = None

    if os.path.isfile(self.log_file):
     config = configparser.ConfigParser()
     config.read(self.config_file)

    return config

  def get_connection():
    db = get_db_config()
    # Connect to the database
    connection = pymysql.connect(host=db['host'],
                               user=db['user'],
                               passwd=db['pass'],
                               db=db['db'],
                               charset='utf8mb4',
                               cursorclass=pymysql.cursors.DictCursor)
    return connection
