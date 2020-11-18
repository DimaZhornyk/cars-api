def setup_routes(app, handler, project_root):
    router = app.router
    router.add_get('/api/get_cars', handler.get_cars, name='get_cars')
    router.add_post('/api/add_car', handler.add_car, name='add_car')
    router.add_post('/api/edit_car', handler.edit_car, name='edit_car')
    router.add_post('/api/delete_car', handler.delete_car, name='delete_car')
    router.add_static('/static/', path=str(project_root / 'static'),
                      name='static')
