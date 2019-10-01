from flask import Blueprint, render_template, request, make_response, jsonify
from flask import current_app as app
from ..models import db, User, Track, Resource, Section, Step


api = Blueprint('api', __name__)

@api.route("/v1/")
def index():
    return "hello api"


@api.route("/v1/users", methods=['POST'])
def create_user():
    '''
    Creates new user
    '''
    return "User created"

@api.route("/v1/users", methods=['GET'])
def read_users():
    '''
    Reads all users
    '''
    return "Here are all users"

@api.route("/v1/users/<user_id>", methods=['PUT'])
def update_user(user_id):
    '''
    Updates given user
    '''
    return "Updated user"

@api.route("/v1/users/<user_id>", methods=['GET'])
def read_user(user_id):
    '''
    Reads given user
    '''
    return "Here is a user"

@api.route("/v1/users/<user_id>", methods=['DELETE'])
def delete_user(user_id):
    '''
    Deletes given user
    '''
    return "User deleted"


# TRACKS
@api.route("/v1/tracks", methods=['POST'])
def create_track():
    '''
    Creates new track
    '''
   
    name = request.args.get('name')
    description = request.args.get('description')

    track = Track(
        name=name,
        description=description)  
    
    db.session.add(track)  
    db.session.commit()

    return make_response(f"{track} successfully created with!")

@api.route("/v1/tracks", methods=['GET'])
def read_tracks():
    '''
    Reads all tracks
    '''

    tracks = Track.query.all()
    return jsonify(tracks = [track.serialize() for track in tracks])

@api.route("/v1/tracks/<track_id>", methods=['PUT'])
def update_track(track_id):
    '''
    Updates given track
    '''
    
    return "Updated track"

@api.route("/v1/tracks/<track_id>", methods=['GET'])
def read_track(track_id):
    '''
    Reads given track
    '''
    return "Here is a track"

@api.route("/v1/tracks/<track_id>", methods=['DELETE'])
def delete_track(track_id):
    '''
    Deletes given track
    '''
    return "track deleted"


# Resources
@api.route("/v1/resources", methods=['POST'])
def create_resource():
    '''
    Creates new resource
    '''

    name = request.args.get('name')
    description = request.args.get('description')
    resource_type = request.args.get('resource_type')

    resource = Resource(
        name=name,
        description=description,
        resource_type=resource_type)  
    
    db.session.add(resource)  
    db.session.commit()

    return make_response(f"{resource} successfully created!")


@api.route("/v1/resources", methods=['GET'])
def read_resources():
    '''
    Reads all resources
    '''
    resources = Resource.query.all()
    return jsonify(resources = [resource.serialize() for resource in resources])

@api.route("/v1/resources/type/<resource_type>", methods=['GET'])
def read_resources_by_type(resource_type):
    '''
    Gets resources by type
    '''
    resources = Resource.query.filter_by(resource_type = resource_type)
    return jsonify(resources = [resource.serialize() for resource in resources])

@api.route("/v1/resources/<resource_id>", methods=['PUT'])
def update_resource(resource_id):
    '''
    Updates given resource
    '''
    return "Updated resource"

@api.route("/v1/resources/<resource_id>", methods=['GET'])
def read_resource(resource_id):
    '''
    Reads given resource
    '''
    resources = Resource.query.filter_by(id = resource_id)
    return jsonify(resources = [resource.serialize() for resource in resources])

@api.route("/v1/resources/<resource_id>", methods=['DELETE'])
def delete_resource(resource_id):
    '''
    Deletes given resource
    '''
    return "resource deleted"


# SECTIONS
@api.route("/v1/sections", methods=['POST'])
def create_section():
    '''
    Creates new section
    '''
    return "section created"

@api.route("/v1/sections", methods=['GET'])
def read_sections():
    '''
    Reads all sections
    '''
    return "Here are all sections"

@api.route("/v1/sections/<section_id>", methods=['PUT'])
def update_section(section_id):
    '''
    Updates given section
    '''
    return "Updated section"

@api.route("/v1/sections/<section_id>", methods=['GET'])
def read_section(section_id):
    '''
    Reads given section
    '''
    return "Here is a section"

@api.route("/v1/sections/<section_id>", methods=['DELETE'])
def delete_section(section_id):
    '''
    Deletes given section
    '''
    return "section deleted"


# STEPS
@api.route("/v1/steps", methods=['POST'])
def create_step():
    '''
    Creates new step
    '''
    return "step created"

@api.route("/v1/steps", methods=['GET'])
def read_steps():
    '''
    Reads all steps
    '''
    return "Here are all steps"

@api.route("/v1/steps/<step_id>", methods=['PUT'])
def update_step(step_id):
    '''
    Updates given step
    '''
    return "Updated step"

@api.route("/v1/steps/<step_id>", methods=['GET'])
def read_step(step_id):
    '''
    Reads given step
    '''
    return "Here is a step"

@api.route("/v1/steps/<step_id>", methods=['DELETE'])
def delete_step(step_id):
    '''
    Deletes given step
    '''
    return "step deleted"