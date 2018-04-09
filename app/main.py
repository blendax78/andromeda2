from app import app, Config, render_response, unauthorized
from flask import request, Response, json, render_template, redirect

import app.controllers.main as controller
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
@app.route('/user', methods=['GET'])
def user_get():
  token = request.cookies.get('auth.token');
  return render_response(json.dumps(controller.user_get(token)), 'application/json')

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
  data = json.loads(request.form['data'])
  return render_response(json.dumps(controller.player_set(player_id, data)), 'application/json')

########## SKILL ##########
@app.route('/skill/<player_id>', methods=['GET'])
def skill_get(player_id=None):
  return render_response(json.dumps(controller.skill_get(player_id)), 'application/json')

@app.route('/skill/<player_id>', methods=['POST'])
def skill_set(player_id=None):
  return render_response(json.dumps(controller.skill_set(player_id, request.form['data'])), 'application/json')

########## INVENTORY ##########
@app.route('/inventory/<player_id>', methods=['GET'])
def inventory_get(player_id=None):
  return render_response(json.dumps(controller.inventory_get(player_id)), 'application/json')

@app.route('/inventory/<player_id>', methods=['POST'])
def inventory_set(player_id=None):
  data = json.loads(request.form['data'])
  return render_response(json.dumps(controller.inventory_set(player_id, data)), 'application/json')

########## BANK ##########
@app.route('/bank/<player_id>', methods=['GET'])
def bank_get(player_id=None):
  return render_response(json.dumps(controller.bank_get(player_id)), 'application/json')

@app.route('/bank/<player_id>', methods=['POST'])
def bank_set(player_id=None):
  data = json.loads(request.form['data'])
  return render_response(json.dumps(controller.bank_set(player_id, data)), 'application/json')

########## SHARED ##########

@app.before_request
def before_request():
  # print(request.cookies.get('auth.token'))
  #This is handled by flask automatically in debug mode
  # Config.log(request.url_rule.rule)

  if 'auth.token' not in request.cookies:
    if request.method == 'GET':
      return redirect('%s?r=%s' % (Config.auth_url, Config.site_url) )
    else:
      return unauthorized()

  # l = Logger()
  # l.log('hi','ho')
  # c = Config()
  # print(c.log('hello', 'world'))


