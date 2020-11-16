import trafaret as t
from trafaret.contrib.object_id import MongoId

car = t.Dict({
    t.Key('_id'): MongoId(),
    t.Key('manufacturer'): t.String(),
    t.Key('model'): t.String(),
    t.Key('year'): t.Int(),
    t.Key('color'): t.String(),
    t.Key('vin'): t.String(),
})
