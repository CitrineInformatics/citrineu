from flask import Flask
from citrine_university.admin.app import admin
from citrine_university.api.v1.app import api

app = Flask(__name__)

app.register_blueprint(admin, url_prefix='/admin')
app.register_blueprint(api, url_prefix='/api')