from flask import Flask, g
from flask_sqlalchemy import SQLAlchemy
import psycopg2

# Globally accessible libraries
db = SQLAlchemy()

def create_app():
    """Initialize the core application."""
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')

    db.init_app(app)

    with app.app_context():
        from citrine_university.admin.app import admin
        from citrine_university.api.app import api
        
        # Register Blueprints
        app.register_blueprint(admin, url_prefix='/admin')
        app.register_blueprint(api, url_prefix='/api')

        # Create tables for our models
        db.create_all()

        return app


