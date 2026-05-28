import http.server
import socketserver
import os

PORT = 7000  # Change this to your desired port

# Change to the directory containing your website files
#os.chdir("/path/to/your/website/folder") # Replace with the actual path

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    httpd.serve_forever()