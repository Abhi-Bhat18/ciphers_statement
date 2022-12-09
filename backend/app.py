import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import pandas as pd

# Reading data set
data_frame = pd.read_csv('data/cleaned_dataset.csv')
# model = pickle.load(open('./models/finalized_model.pkl','rb'))

#Function for finding the category 
def find_category(category):
    rslt_df = data_frame.loc[data_frame['Category'] == category]
    rslt_df = rslt_df.loc[:,["Name","cleaned_resume"]]
    category = rslt_df.iloc[0:20]
    return category

app = Flask(__name__)

@app.route('/',)
def index():
    return "Hello world"

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''

    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = round(prediction[0], 2)

    # return render_template('index.html', prediction_text='Employee Salary should be $ {}'.format(output))
 
if __name__ == "__main__":
    app.run(debug=True)
