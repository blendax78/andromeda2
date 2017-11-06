from app import app, Config, render_response, unauthorized
from flask import request, Response, json, render_template, redirect
from app.controllers.logger import Log as Logger

import app.controllers.main as controller
import logging
import os
import sys

@app.route('/')
def index():
  if  '127.0.0.1' in request.url or 'localhost' in request.url or request.cookies.get('auth.id') != None:
    # return render_response(json.dumps(request.cookies), 'application/json')
    return render_template('index.html'), 200
  else:
    return redirect('%s?r=%s' % (Config.auth_url, Config.site_url))

@app.route('/player/<user_id>', methods=['GET'])
def player_get(user_id=None):
  print(controller.player_get(user_id))
  return render_response(json.dumps({'user':user_id}), 'application/json')

@app.before_request
def before_request():
  pass
  # l = Logger()
  # l.log('hi','ho')
  # c = Config()
  # print(c.log('hello', 'world'))


