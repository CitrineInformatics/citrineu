from flask import Flask, g
from flask_sqlalchemy import SQLAlchemy
from citrine_university.admin.app import admin
from citrine_university.api.v1.app import api

# Globally accessible libraries
db = SQLAlchemy()

def create_app():
    """Initialize the core application."""
    app = Flask(__name__, instance_relative_config=False)
    db.init_app(app)

    app.config.from_object('config.Config')

    with app.app_context():
        # Include our Routes
        #from . import routes
        
        # Register Blueprints
        app.register_blueprint(admin, url_prefix='/admin')
        app.register_blueprint(api, url_prefix='/api')

        # Create tables for our models
        db.create_all()

        return app


