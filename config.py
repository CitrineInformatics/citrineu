import os
from os import environ
from dotenv import find_dotenv, load_dotenv

class Config:
    """Set Flask configuration vars from .env file."""
    
    load_dotenv()

    # General
    TESTING = os.environ.get("TESTING")
    FLASK_DEBUG = os.environ.get("FLASK_DEBUG")
    
    # Database
    SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI") #'sqlite:///database.db' #
    SQLALCHEMY_TRACK_MODIFICATIONS = os.environ.get("SQLALCHEMY_TRACK_MODIFICATIONS")