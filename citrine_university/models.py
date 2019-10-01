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
        nullable=True)
    
    resources = db.Column(
        db.String(255),
        index=False,
        unique=False,
        default="No Resources",
        nullable=True)
    
    def __repr__(self):
        return '<{}>'.format(self.name)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'resources': self.resources.split(','),
        }

    

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
        nullable=True)
    
    tracks = db.Column(
        db.String(255),
        index=False,
        unique=False,
        default="No tracks",
        nullable=True)

    sections = db.Column(
        db.String(255),
        index=False,
        unique=False,
        default="No sections",
        nullable=True)
    
    steps = db.Column(
        db.String(255),
        index=False,
        unique=False,
        default="No steps",
        nullable=True)
        
    resource_type = db.Column(
        db.String(64),
        index=False,
        unique=False,
        nullable=True)

    topics = db.Column(
        db.String(),
        index=False,
        unique=False,
        default="General",
        nullable=True)

    def __repr__(self):
        return '<{}>'.format(self.name)

    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'tracks': self.tracks.split(','),
            'sections': self.sections.split(','),
            'steps': self.steps.split(','),
            'resource_type': self.resource_type,
            'topics': self.topics.split(',')
        }

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