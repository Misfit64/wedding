#!/usr/bin/env python3
import http.server
import socketserver
import os
import sys

PORT = int(os.environ.get("PORT", 3000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_latest_mtime():
    max_mtime = 0
    for root, dirs, files in os.walk(DIRECTORY):
        if ".git" in root or "__pycache__" in root:
            continue
        for f in files:
            if f.endswith((".html", ".css", ".js", ".png", ".jpg", ".jpeg", ".svg")):
                try:
                    p = os.path.join(root, f)
                    mt = os.path.getmtime(p)
                    if mt > max_mtime:
                        max_mtime = mt
                except OSError:
                    pass
    return str(max_mtime)

class LiveReloadHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):

        if self.path == "/favicon.ico":
            self.send_response(204)
            self.end_headers()
            return

        if self.path.startswith("/media/"):
            self.send_response(204)
            self.end_headers()
            return
        if self.path.startswith('/__livereload_version__'):
            self.send_response(200)
            self.send_header('Content-Type', 'text/plain')
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Access-Control-Allow-Origin', '*')
            mtime_bytes = get_latest_mtime().encode('utf-8')
            self.send_header('Content-Length', str(len(mtime_bytes)))
            self.end_headers()
            self.wfile.write(mtime_bytes)
            return

        super().do_GET()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

if __name__ == '__main__':
    with ReusableTCPServer(("0.0.0.0", PORT), LiveReloadHandler) as httpd:
        print(f"\n==========================================")
        print(f"  Live Reload Server is RUNNING!")
        print(f"  Local URL:   http://localhost:{PORT}")
        print(f"  Network:     http://127.0.0.1:{PORT}")
        print(f"==========================================\n")
        sys.stdout.flush()
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")
