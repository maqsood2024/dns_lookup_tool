from flask import Flask, render_template, request
import dns.resolver

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('base.html')

@app.route('/lookup')
def lookup():
    domain = request.args.get('domain')

    # Perform DNS lookup for A records
    try:
        answers = dns.resolver.resolve(domain, 'A')
        results = [str(rdata) for rdata in answers]
    except Exception as e:
        results = [str(e)]

    return render_template('lookup.html', domain=domain, results=results)



