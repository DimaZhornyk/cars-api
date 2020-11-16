import motor.motor_asyncio as aiomotor


async def init_mongo(conf, db_name, loop):
    conn = aiomotor.AsyncIOMotorClient(conf['mongo_uri'].format(db_name), io_loop=loop)
    return conn[db_name]
