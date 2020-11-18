import json

from aiohttp.web import json_response
from bson import ObjectId, json_util
from trafaret.dataerror import DataError

from src.schema import car
from src.utils import body_required


class SiteHandler:

    def __init__(self, mongo):
        self.mongo = mongo

    @body_required
    async def add_car(self, request):
        body = await request.json()
        try:
            new_entry = car({
                '_id': ObjectId(),
                'manufacturer': body['manufacturer'],
                'model': body['model'],
                'year': body['year'],
                'color': body['color'],
                'vin': body['vin']
            })
        except DataError:
            return json_response({'success': False, 'info': 'Incorrect data'}, status=400)
        except KeyError:
            return json_response({'success': False, 'info': 'Incorrect data keys'}, status=400)
        if body['vin'] in await self.mongo.cars.distinct('vin'):
            return json_response({'success': False, 'info': 'VIN number must be unique'}, status=400)
        await self.mongo.cars.insert_one(new_entry)
        return json_response({'success': True})

    async def get_cars(self, request):
        if request.has_body:
            body = await request.json()
            sort_by = '_id'
            filter_query = {}
            if 'sort_by' in body.keys():
                sort_by = body['sort_by']
            if 'filter' in body.keys():
                filter_query = body['filter']
            try:
                cars = await self.mongo.cars.find(filter_query).sort(sort_by).to_list(None)
            except Exception:
                return json_response({'success': False, 'info': 'Error occurred when getting cars'}, status=500)

            return json_response({'success': True, "cars": json.loads(json_util.dumps(cars))})
        else:
            cars = await self.mongo.cars.find({}).to_list(None)
            return json_response({'success': True, "cars": json.loads(json_util.dumps(cars))})

    @body_required
    async def edit_car(self, request):
        body = await request.json()
        try:
            car.check({
                '_id': ObjectId(body['id']),
                'manufacturer': body['data_to_set']['manufacturer'],
                'model': body['data_to_set']['model'],
                'year': body['data_to_set']['year'],
                'color': body['data_to_set']['color'],
                'vin': body['data_to_set']['vin']
            })
            car_with_this_vin = await self.mongo.cars.find_one({'vin': body['data_to_set']['vin']})
            if car_with_this_vin and ObjectId(body['id']) != car_with_this_vin['_id']:
                return json_response({'success': False, 'info': 'VIN number must be unique'}, status=400)
            await self.mongo.cars.update_one({'_id': ObjectId(body['id'])}, {'$set': body['data_to_set']})
        except Exception:
            return json_response({'success': False, 'info': 'Error occurred when editing cars'}, status=500)
        return json_response({'success': True})

    @body_required
    async def delete_car(self, request):
        body = await request.json()
        try:
            await self.mongo.cars.delete_one({'_id': ObjectId(body['id'])})
        except Exception:
            return json_response({'success': False, 'info': 'Error occurred when deleting car'}, status=500)
        return json_response({'success': True})
