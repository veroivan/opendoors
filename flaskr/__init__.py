from flask import Flask

app = Flask(__name__)


@app.route('/scrapeUrl', methods=['GET'])
def scrape_url():
    return 'Hello world'
