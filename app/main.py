from app import app
from flask import request, Response, json, render_template, redirect
from .config import Config
#from app.controllers.user import User as UserController
#from app.controllers.stamp import Stamp as StampController
#from app.models.stamp import Stamp
#from app.controllers.logger import Log as Logger

import logging
import os
import sys

@app.route('/')
def index():
  return render_template('index.html')
  # return set_access_control(response, 'application/json'), 200

@app.before_request
def before_request():
  c = Config()
  print(c.log('hello', 'world'))

# HELPER FUNCTIONS #############################################################

def set_access_control(msg, mimetype):
  resp = Response(msg, mimetype=mimetype)
  resp.headers['Access-Control-Allow-Origin'] = '*'
  return resp

def unauthorized():
  response = json.dumps({'message': 'Not Authorized'})
  return response, 401
