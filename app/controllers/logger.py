from app.models.log import Log as LogModel
import sys

class Log:

  def log(self, subject='', msg=''):
    log = LogModel()
    log.log(subject, msg)
    return True

