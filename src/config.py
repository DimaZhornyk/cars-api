def config():
    """
        Mongo user credentials were left by purpose to simplify a project lookup,
        but can be replaced with info from .env file
    """
    return {
        'mongo_uri': 'mongodb+srv://admin:12345@cars.exuau.mongodb.net/{}?retryWrites=true&w=majority',
        'host': '127.0.0.1',
        'port': '9001',
        'db_name': 'Cars',
    }
