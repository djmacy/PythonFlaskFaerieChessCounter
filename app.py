from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')
"""
@app.route('/calculate', methods=['POST'])
def calculate():
    total_points = int(request.form['pawn']) * 1 + \
                   int(request.form['peasant']) * 2 + \
                   int(request.form['soldier']) * 3 + \
                   int(request.form['rook']) * 9 + \
                   int(request.form['knight']) * 4 + \
                   int(request.form['bishop']) * 6 + \
                   int(request.form['catapult']) * 3 + \
                   int(request.form['chamberlain']) * 6 + \
                   int(request.form['courtesan']) * 6 + \
                   int(request.form['herald']) * 6 + \
                   int(request.form['inquisitor']) * 8 + \
                   int(request.form['lancer']) * 5 + \
                   int(request.form['pontiff']) * 8 + \
                   int(request.form['thief']) * 5 + \
                   int(request.form['tower']) * 10 + \
                   int(request.form['queen']) * 12 + \
                   int(request.form['king']) * 0 + \
                   int(request.form['jester']) * 12 + \
                   int(request.form['regent']) * 15

    selected_difficulty = request.form['difficulty']
    difficulties = {
        "Beginner": 65,
        "Intermediate": 70,
        "Advanced": 75
    }
    remaining_points = difficulties[selected_difficulty] - total_points

    return render_template('result.html', total_points=total_points, remaining_points=remaining_points)
"""
if __name__ == '__main__':
    app.run()
