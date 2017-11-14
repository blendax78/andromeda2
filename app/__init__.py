from flask import Flask, request, Response
from flask_cors import CORS

from app.config import Config
import json

# HELPER FUNCTIONS #############################################################

Config = Config()

def render_response(msg, mimetype='application/json', code=200):
  # application/json text/html
  resp = Response(msg, mimetype=mimetype)
  resp.headers['Access-Control-Allow-Origin'] = '*'
  
  return resp, code

def unauthorized():
  response = json.dumps({'message': 'Not Authorized'})
  return response, 401


app = Flask(__name__)
CORS(app)

from app import main
