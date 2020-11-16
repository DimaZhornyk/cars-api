import functools

import motor.motor_asyncio as aiomotor
from aiohttp.web import json_response


async def init_mongo(conf, db_name, loop):
    conn = aiomotor.AsyncIOMotorClient(conf['mongo_uri'].format(db_name), io_loop=loop)
    return conn[db_name]


def body_required(f):
    @functools.wraps(f)
    async def wrapped(self, request):
        if not request.has_body:
            return json_response({'success': False, 'info': 'Body required'}, status=400)
        return await f(self, request)

    return wrapped
