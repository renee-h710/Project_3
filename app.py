import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask_cors import CORS

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///data.sqlite")

Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Occupancy= Base.classes.Occupancy_percentage
Value = Base.classes.Value_estimate
Gross_Rent = Base.classes.Gross_rent_percentage



#################################################
# Flask Setup
#################################################
app = Flask(__name__)

CORS(application)
#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/gross_rent_per<br/>"
        f"/api/v1.0/value_est<br/>"
        f"/api/v1.0/occupancy_per"
    )




@app.route("/api/v1.0/occupancy_per")
def occupancy():
    #  Create our session (link) from Python to the DB
    session = Session(engine)

    #get data from DB
    results = session.query(Occupancy.State, Occupancy.Occupied, Occupancy.Vacant).all()

    session.close()

    #     Create a dictionary from the row data and append to a list of all_states
    all_states = []
    for State, Occupied, Vacant in results:
       state_dict = {}
       state_dict["state"] = State
       state_dict["occupied"] = Occupied
       state_dict["vacant"] = Vacant
       all_states.append(state_dict)

    return jsonify(all_states)


@app.route("/api/v1.0/value_est")
def value():
    #  Create our session (link) from Python to the DB
    session = Session(engine)

    #get data from DB
    results = session.query(Value.state, Value.lessThan50, 
    Value.fifty, 
    Value.hundred, 
    Value.hundredFifty, 
    Value.threeHundred, 
    Value.fiveHundred, 
    Value.million).all()

    session.close()

    #     Create a dictionary from the row data and append to a list of all_states
    all_states = []
    for state, lessThan50, fifty, hundred, hundredFifty, threeHundred, fiveHundred, million in results:

        state_dict = {}
        state_dict["state"] = state
        state_dict["lessThan50"] = lessThan50
        state_dict["fifty"] = fifty
        state_dict["hundred"] = hundred
        state_dict["hundredFifty"] = hundredFifty
        state_dict["threeHundred"] = threeHundred
        state_dict["fiveHundred"] = fiveHundred
        state_dict["million"] = million
        all_states.append(state_dict)

    return jsonify(all_states)



@app.route("/api/v1.0/gross_rent_per")
def grossRent():
    #  Create our session (link) from Python to the DB
    session = Session(engine)

    #get data from DB
    results = session.query(Gross_Rent.state, Gross_Rent.lessThan15, 
    Gross_Rent.fifteen, 
    Gross_Rent.twenty, 
    Gross_Rent.twentyfive, 
    Gross_Rent.thirty, 
    Gross_Rent.thirtyfive).all()

    session.close()

#     Create a dictionary from the row data and append to a list of all_states
    all_states = []
    for state, lessThan15, fifteen, twenty, twentyfive, thirty, thirtyfive in results:
       state_dict = {}
       state_dict["state"] = state
       state_dict["lessThan15"] = lessThan15
       state_dict["fifteen"] = fifteen
       state_dict["twenty"] = twenty
       state_dict["twentyfive"] = twentyfive
       state_dict["thirty"] = thirty
       state_dict["thirtyfive"] = thirtyfive
       all_states.append(state_dict)

    return jsonify(all_states)


if __name__ == '__main__':
    app.run(debug=True)
