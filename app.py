from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import os
import pandas as pd
import numpy as np
from model import *

app = Flask(__name__)
CORS(app)

@app.route('/audio', methods=['POST', 'GET'])
def audio():
    if request.method == 'POST':
        print(request.files)
        
        # Check if the 'file' key is in request.files
        if 'audio' in request.files:
            audio_file = request.files['audio']
            
            if audio_file.filename == '':
                return jsonify({"error": "No file selected"})
                
            if audio_file:
                # Save the uploaded file to a temporary location
                temp_path = 'temp.wav'
                audio_file.save(temp_path)

                prediction = predict(temp_path)
                result = {
                        "Prediction": prediction
                    }
                os.remove(temp_path)
                print(result)
                return jsonify(result)
            else:
                return jsonify({"error": "Feature extraction failed for the uploaded audio file."})
        else:
            return jsonify({"error": "No audio key found in the request."})
    else:
        return jsonify({"error": "Unsupported method"})


if __name__ == '__main__':
    app.run(debug=True)