def setup_routes(app, handler, project_root):
    router = app.router
    # TODO add routes
    router.add_static('/static/', path=str(project_root / 'static'),
                      name='static')
