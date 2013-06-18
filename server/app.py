# -*- coding: utf-8 -*-
import tornado.ioloop
import tornado.web
import tornado.escape

from sockjs.tornado import SockJSConnection, SockJSRouter
import brukva
from brukva.exceptions import ConnectionError


def gen_string(N):
    return ''.join(random.choice(string.ascii_lowercase + string.digits) for x in range(N))

redis_client = brukva.Client()
redis_client.connect()


class StaticHandler(tornado.web.RequestHandler):
    def get(self):
        self.render('../client/index.htm')
        

if __name__ == "__main__":
    import logging
    logging.getLogger().setLevel(logging.DEBUG)

    app = tornado.web.Application(
        [(r"/", StaticHandler)]
    )

    app.listen(8081)

    tornado.ioloop.IOLoop.instance().start()