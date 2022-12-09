from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle
import pandas as pd
import PyPDF2
from flask_sqlalchemy import SQLAlchemy


# Reading data set
data_frame = pd.read_csv('data/cleaned_dataset.csv')
# model = pickle.load(open('./models/finalized_model.pkl','rb'))

# extracting text from pdf
pdfFileObj = open('data/sample.pdf', 'rb') 
pdfReader = PyPDF2.PdfFileReader(pdfFileObj) 
print(pdfReader.numPages) 
# creating a page object 
pageObj = pdfReader.getPage(0) 
# extracting text from page 
print(pageObj.extractText()) 
# closing the pdf file object 
pdfFileObj.close() 

#Function for finding the category 
def find_category(category):
    rslt_df = data_frame.loc[data_frame['Category'] == category]
    rslt_df = rslt_df.loc[:,["Name","cleaned_resume"]]
    category = rslt_df.iloc[0:20]
    return category

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE'] = 'sqlite:///resume.db'
db = SQLAlchemy(app)


#Creating Database models 
class Basic_info(db.model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(200),nullable=False)
    first_name = db.Column(db.String(200),nullable=False)
    last_name = db.Column(db.String(200),nullable=False)
    github_link = db.Column(db.String(200),nullable=False)
    linked_link = db.Column(db.String(200),nullable=False)
    message = db.Column(db.String(1000000),nullable=False)
    resume_data = db.Column(db.String(1000000),nullable=False)   

@app.route('/',)
def index():
    return "Hello world"

# @app.route('/predict',methods=['POST'])
# def predict():
#     '''
#     For rendering results on HTML GUI
#     '''

#     int_features = [int(x) for x in request.form.values()]
#     final_features = [np.array(int_features)]
#     prediction = model.predict(final_features)

#     output = round(prediction[0], 2)

    # return render_template('index.html', prediction_text='Employee Salary should be $ {}'.format(output))
 
if __name__ == "__main__":
    app.run(debug=True)
