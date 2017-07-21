import pymysql.cursors
import pymysql.cursors
import configparser

from app import configa # Will this work?

class Model(object):

  def __init__(self):
    self.db_config = self.get_db_config()
    self.connection = self.get_connection()
    self.sql = ''
    self.last = ''
    self.db = ''
    self.table = ''

  def plain_query(self, query):
    connection = self.get_connection()
    cursor = connection.cursor()
    cursor.execute(query)

    result = cursor.fetchone()
    connection.close()

    return result

  def find(self, value):
    connection = self.get_connection()
    cursor = connection.cursor()
    cursor.execute(self.sql, (value))

    result = cursor.fetchone()
    connection.close()

    return result

  def last_added(self):
    connection = self.get_connection()
    cursor = connection.cursor()
    cursor.execute(self.last)

    result = cursor.fetchone()
    connection.close()

    return result

  def get_connection(self):
    db = self.get_db_config()
    db = db[self.db]
    # Connect to the database
    connection = pymysql.connect(host=db['host'],
                               user=db['user'],
                               passwd=db['pass'],
                               db=db['db'],
                               charset='utf8mb4',
                               cursorclass=pymysql.cursors.DictCursor)
    return connection

  def get_db_config(self):
    config = configparser.ConfigParser()
    config.read('/home/blendax/www/lib/digitalocean.ini')
    return config
