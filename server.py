import os, sys, time, datetime
from flask import Flask, render_template
from flask_cors import CORS, cross_origin


print('Starting Basic Flask Server with CORS support.\n\t', datetime.datetime.now())


app = Flask(
    'Fucking_Sweet_App', 
    static_folder="static/dist", 
    template_folder="static"
)
cors = CORS(
    app,
    resources={
        r"/static/*": dict(origins="*")
    }
)

def test_print():
    print('hello java command line.')

app.shell_context_processor({'app': app, 'yeah': test_print})

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/hello")
def hello():
    return\
        '''
        <head>
            <link rel="stylesheet" type="text/css" href="./dist/default.min.css" />
            <title>Fucking Sweet App</title>
        </head>
        <body>
            <div id='testblock'>
                <p>Working From Python</p>
            </div>
        </body>
        '''


if __name__ == "__main__":
    app.run()
