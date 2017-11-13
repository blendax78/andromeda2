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

########## USER ##########
@app.route('/user/<user_id>', methods=['GET'])
def user_get(user_id=None):
  return render_response(json.dumps(controller.user_get(user_id)), 'application/json')

@app.route('/user/<user_id>', methods=['POST'])
def user_set(user_id=None):
  data = json.loads(request.form['data'])
  return render_response(json.dumps(controller.user_set(user_id, data)), 'application/json')

########## PLAYER ##########
@app.route('/player/<user_id>', methods=['GET'])
def player_get(user_id=None):
  return render_response(json.dumps(controller.player_get(user_id)), 'application/json')

@app.route('/player/<player_id>', methods=['POST'])
def player_set(player_id=None):
  print('ho')
  print(request.form)
  print(json.dumps(request.form))
  data = json.loads(request.form['data'])
  return render_response(json.dumps(controller.player_set(player_id, data)), 'application/json')

########## SKILL ##########
@app.route('/skill/<player_id>', methods=['GET'])
def skill_get(player_id=None):
  return render_response(json.dumps(controller.skill_get(player_id)), 'application/json')

@app.route('/skill/<player_id>', methods=['POST'])
def skill_set(player_id=None):
  data = json.loads(request.form['data'])
  return render_response(json.dumps(controller.skill_set(player_id, data)), 'application/json')

########## INVENTORY ##########
@app.route('/inventory/<player_id>', methods=['GET'])
def inventory_get(player_id=None):
  return render_response(json.dumps(controller.inventory_get(player_id)), 'application/json')

@app.route('/inventory/<player_id>', methods=['POST'])
def inventory_set(player_id=None):
  data = json.loads(request.form['data'])
  return render_response(json.dumps(controller.inventory_set(player_id, data)), 'application/json')

@app.before_request
def before_request():
  # check for cookie
  pass
  # l = Logger()
  # l.log('hi','ho')
  # c = Config()
  # print(c.log('hello', 'world'))


