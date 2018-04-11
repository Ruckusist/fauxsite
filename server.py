import os, sys, time, datetime
from flask import Flask, render_template

print('this is working', datetime.datetime.now())


app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/hello")
def hello():
    return "Working From Python”

if __name__ == "__main__":
app.run()
