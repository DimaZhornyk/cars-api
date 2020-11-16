def setup_routes(app, handler, project_root):
    router = app.router
    router.add_get('/get_cars', handler.get_cars, name='get_cars')
    router.add_post('/add_car', handler.add_car, name='add_car')
    router.add_post('/edit_car', handler.edit_car, name='edit_car')
    router.add_static('/static/', path=str(project_root / 'static'),
                      name='static')
