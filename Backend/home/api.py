from flask import jsonify, Blueprint
from flask_cors import cross_origin

import blockchain.blockInterface as block

home_api = Blueprint('home_api', __name__)

books = [
    {'id': 0,
     'title': 'A Fire Upon the Deep',
     'author': 'Vernor Vinge',
     'first_sentence': 'The coldsleep itself was dreamless.',
     'year_published': '1992'},
    {'id': 1,
     'title': 'The Ones Who Walk Away From Omelas',
     'author': 'Ursula K. Le Guin',
     'first_sentence': 'With a clamor of bells that set the swallows soaring, the Festival of Summer came to the city Omelas, bright-towered by the sea.',
     'published': '1973'},
    {'id': 2,
     'title': 'Dhalgren',
     'author': 'Samuel R. Delany',
     'first_sentence': 'to wound the autumnal city.',
     'published': '1975'}
]

@home_api.route('/api/books')
@cross_origin()
def api_all():
    return jsonify(books)

@home_api.route('/api/web/test')
@cross_origin()
def api_test():
    w3 = block.getWeb3Endpoint()
    HempContract = block.makeContract()
    plant = block.plant(HempContract)
    return hemp
