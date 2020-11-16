import asyncio
import logging
import pathlib

from aiohttp import web

from src.routes import setup_routes
from src.utils import init_mongo
from src.config import config
from src.handlers import SiteHandler

PROJ_ROOT = pathlib.Path(__file__).parent.parent


async def setup_mongo(app, conf, loop):
    mongo = await init_mongo(conf, conf['db_name'], loop)

    async def close_mongo():
        mongo.client.close()

    app.on_cleanup.append(close_mongo)
    return mongo


async def init(loop):
    conf = config()

    app = web.Application()
    mongo = await setup_mongo(app, conf, loop)
    handler = SiteHandler(mongo)
    setup_routes(app, handler, PROJ_ROOT)
    host, port = conf['host'], conf['port']
    return app, host, port


def main():
    logging.basicConfig(level=logging.DEBUG)

    loop = asyncio.get_event_loop()
    app, host, port = loop.run_until_complete(init(loop))
    web.run_app(app, host=host, port=port)


if __name__ == '__main__':
    main()
