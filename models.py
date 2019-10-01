from . import db

class User(db.Model):
    """
    Model for user accounts
    """

    __tablename__ = 'users'

    id = db.Column(
        db.Integer,
        primary_key=True)

    name = db.Column(
        db.String(64),
        index=False,
        unique=True,
        nullable=False)
    
    password = db.Column(
        db.String(64),
        index=False,
        unique=False,
        nullable=False)

    email = db.Column(
        db.String(80),
        index=True,
        unique=True,
        nullable=False)

    admin = db.Column(
        db.Boolean,
        index=False,
        unique=False,
        nullable=False)

class Track(db.Model):
    """
    Model for tracks
    """

    __tablename__ = 'tracks'

    id = db.Column(
        db.Integer,
        primary_key=True)

    name = db.Column(
        db.String(64),
        index=False,
        unique=True,
        nullable=False)
    
    description = db.Column(
        db.String(255),
        index=False,
        unique=False,
        nullable=False)
    
    resources = db.Column(
        db.String(255),
        index=False,
        unique=False,
        nullable=False)
    

class Resource(db.Model):
    """
    Model for resources
    """

    __tablename__ = 'resources'

    id = db.Column(
        db.Integer,
        primary_key=True)

    name = db.Column(
        db.String(64),
        index=False,
        unique=True,
        nullable=False)
    
    description = db.Column(
        db.String(255),
        index=False,
        unique=False,
        nullable=False)
    
    tracks = db.Column(
        db.String(255),
        index=False,
        unique=False,
        nullable=False)

    sections = db.Column(
        db.String(255),
        index=False,
        unique=False,
        nullable=True)
    
    steps = db.Column(
        db.String(255),
        index=False,
        unique=False,
        nullable=False)
        
    resource_type = db.Column(
        db.String(64),
        index=False,
        unique=False,
        nullable=False)

class Section(db.Model):
    """
    Model for sections
    """

    __tablename__ = 'sections'

    id = db.Column(
        db.Integer,
        primary_key=True)

    name = db.Column(
        db.String(64),
        index=False,
        unique=True,
        nullable=False)
    
    description = db.Column(
        db.String(255),
        index=False,
        unique=False,
        nullable=False)
    
    resource = db.Column(
        db.String(64),
        index=False,
        unique=False,
        nullable=False)

    order = db.Column(
        db.Integer(),
        index=False,
        unique=False,
        nullable=False)
    
    steps = db.Column(
        db.String(255),
        index=False,
        unique=False,
        nullable=False)

class Step(db.Model):
    """
    Model for steps
    """

    __tablename__ = 'steps'

    id = db.Column(
        db.Integer,
        primary_key=True)

    name = db.Column(
        db.String(64),
        index=False,
        unique=True,
        nullable=False)
    
    description = db.Column(
        db.String(255),
        index=False,
        unique=False,
        nullable=False)

    step_type = db.Column(
        db.String(64),
        index=False,
        unique=False,
        nullable=False)
    
    content = db.Column(
        db.String(),
        index=False,
        unique=False,
        nullable=True)
    
    order = db.Column(
        db.Integer(),
        index=False,
        unique=False,
        nullable=False)
    
    resource = db.Column(
        db.String(64),
        index=False,
        unique=False,
        nullable=False)

    section = db.Column(
        db.Integer(),
        index=False,
        unique=False,
        nullable=True)