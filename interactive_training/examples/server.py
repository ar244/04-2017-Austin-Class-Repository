from flask import Flask
app = Flask(__name__, static_url_path='')

@app.route('/')
def server_index():
    return app.send_static_file('ngrok_run_a_public_server.html')


if __name__ == '__main__':
    app.run()
