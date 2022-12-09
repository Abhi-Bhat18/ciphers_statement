from flask import Flask, request, jsonify, render_template
import numpy as np
import pickle
import pandas as pd
import PyPDF2
from flask_sqlalchemy import SQLAlchemy
from werkzeug.utils import secure_filename

# Reading data set
data_frame = pd.read_csv('data/cleaned_dataset.csv')
# model = pickle.load(open('./models/finalized_model.pkl','rb'))


# Function for finding the category
def find_category(category):
    rslt_df = data_frame.loc[data_frame['Category'] == category]
    rslt_df = rslt_df.loc[:, ["Name", "cleaned_resume"]]
    category = rslt_df.iloc[0:20]
    return category


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///resume.db'
db = SQLAlchemy(app)

app.app_context().push()

# Creating Database models
class Basic_info(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(200), nullable=False)
    first_name = db.Column(db.String(200), nullable=False)
    last_name = db.Column(db.String(200), nullable=False)
    github_link = db.Column(db.String(200), nullable=False)
    linked_link = db.Column(db.String(200), nullable=False)
    message = db.Column(db.String(1000000), nullable=False)
    resume_data = db.Column(db.String(1000000), nullable=False)


@app.route('/getdata', methods=['POST'])
def getdata():
    data = request.json
    Fname = data['Fname']
    Lname = data["Lname"]
    Email = data["Email"]
    Phone = data["Phone"]
    Github = data["Github"]
    LinkedIn = data["Linkedin"]
    Message = data["Message"]
    resumeFile = request.files["resume"]
    resumeFile.save(secure_filename(resumeFile.filename))

    print(Fname, Lname, Email, Phone, Github, LinkedIn, Message)
    # extracting text from pdf
    pdfFileObj = open(resumeFile.filename, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    print(pdfReader.numPages)
    # creating a page object
    resumedata = ""

    for page in range(pdfReader.numPages):
        pageObj = pdfReader.getPage(page)
        resumedata += pageObj.extractText()

    pdfFileObj.close()

    return {"status": "ok", "data": resumedata}




@app.route('/',methods=['POST','GET'])
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
