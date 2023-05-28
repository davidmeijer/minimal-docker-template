#!/usr/bin/env python3
from flask import Flask, request

from my_lib import get_greeting


app = Flask(__name__)


@app.errorhandler(404)
def not_found(e) -> str: return app.send_static_file("index.html")


@app.route("/")
def index() -> str: return app.send_static_file("index.html")


@app.route("/api/fetch_greeting", methods=["POST"])
def fetch_greeting(): 
    # req (a dictionary) contains data you send from the client to the server:
    req = request.get_json() 

    # return a dictionary that will be converted to JSON and sent to the client:
    return {"greeting": get_greeting()}


if __name__ == "__main__":
    app.run(host="localhost", port=1234, debug=True)