from app import app
from flask import request, Response, json, render_template, redirect
from .config import Config
#from app.controllers.user import User as UserController
#from app.controllers.stamp import Stamp as StampController
#from app.models.stamp import Stamp
#from app.controllers.logger import Log as Logger

import pymysql.cursors
import configparser
import logging
import os
import sys

@app.route('/')
def index():
  response = json.dumps({'hello': 'world'})
  return set_access_control(response, 'application/json'), 200

@app.before_request
def before_request():
  c = Config()
  print(c.log())
  pass
  # log_file = '/home/blendax/www/log/python/api.log'
  # if os.path.isfile(log_file):
  #   logger = logging.getLogger('app')
  #   handler = logging.FileHandler(log_file)
  #   formatter = logging.Formatter('%(asctime)s %(levelname)s %(message)s')
  #   handler.setFormatter(formatter)
  #   logger.addHandler(handler)
  #   logger.setLevel(logging.DEBUG)




# HELPER FUNCTIONS #############################################################

def set_access_control(msg, mimetype):
  resp = Response(msg, mimetype=mimetype)
  resp.headers['Access-Control-Allow-Origin'] = '*'
  return resp

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

def get_db_config():
  config = get_config()
  return config['andromeda']

def get_config():
  config = configparser.ConfigParser()
  config.read('/home/blendax/www/lib/digitalocean.ini')

  return config

def unauthorized():
  response = json.dumps({'message': 'Not Authorized'})
  return response, 401
