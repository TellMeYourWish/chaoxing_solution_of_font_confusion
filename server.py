
from flask import Flask,request,jsonify
import base64
from glyfSearch import translate

app = Flask(__name__)

@app.route("/")
def hello():
    return "hello"

@app.route("/get_ttf",methods=["POST"])
def get_ttf():
    data = request.json["base64"]
    #print(data)
    data = base64.b64decode(data)
    sz = translate(data)
    #print(sz)
    
    return jsonify(sz)

if __name__=="__main__":

    app.run(host="localhost",port=8080)