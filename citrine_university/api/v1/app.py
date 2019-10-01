from flask import Blueprint, render_template
api = Blueprint('api', __name__)

@api.route("/v1/")
def index():
    return "hello api"