from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Hardcoded credentials for testing
USERNAME = "testuser"
PASSWORD = "testpassword"

@app.route('/login', methods=['POST'])
def login():
    data = request.json  # Get JSON data from the request
    
    # Extract username and password from request data
    username = data.get('username')
    password = data.get('password')

    # Check credentials
    if username == USERNAME and password == PASSWORD:
        return jsonify({"message": "Login successful", "status": "success"}), 200
    else:
        return jsonify({"message": "Invalid credentials", "status": "error"}), 401

if __name__ == '__main__':
    app.run(debug=True)

