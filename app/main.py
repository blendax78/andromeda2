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
  if  '127.0.0.1' in request.url or request.cookies.get('auth.id') != None:
    # return render_response(json.dumps(request.cookies), 'application/json')
    return render_template('index.html'), 200
  else:
    return redirect('%s?r=http://127.0.0.1:5001' % Config().auth_url)

@app.before_request
def before_request():
  c = Config()
  print(c.log('hello', 'world'))

# HELPER FUNCTIONS #############################################################

def render_response(msg, mimetype):
  # application/json text/html
  resp = Response(msg, mimetype=mimetype)
  resp.headers['Access-Control-Allow-Origin'] = '*'
  
  # resp.set_cookie('apple.butter', 'hello', domain='127.0.0.1')
  return resp, 200

def unauthorized():
  response = json.dumps({'message': 'Not Authorized'})
  return response, 401
