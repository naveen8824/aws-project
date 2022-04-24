from crypt import methods
from distutils.log import debug
from flask import Flask,request
from flask_cors import CORS
import boto3
import logging
from botocore.exceptions import ClientError


app = Flask(__name__)
cors = CORS(app)

var = boto3.client(
        'ec2'
    )

@app.route("/get-instances")
def getInstances():
    ec2 = var
    response = ec2.describe_instances()
    return response

@app.route('/start-instance/<id>' , methods=['POST'])
def startInstance(id):
    ec2 = var
    response = ec2.start_instances(
        InstanceIds=[
            id
        ]
    )
    return response

@app.route('/stop-instance/<id>', methods=['POST'])
def stopInstance(id):
    ec2 = var
    response = ec2.stop_instances(
        InstanceIds=[
            id
        ]
    )
    return response

@app.route('/terminate-instance/<id>', methods=['POST'])
def terminateInstance(id):
    ec2 = var
    response = ec2.terminate_instances(
        InstanceIds=[
            id
        ]
    )
    return response



@app.route('/create-instance/<id>', methods = ['POST'])
def createinstance(id):
        ec2 = boto3.resource(
        'ec2'
        )
        response = ec2.create_instances(
            ImageId=id,
            MinCount=1,
            MaxCount=1,
            InstanceType="t2.micro"
        )
        return "instance created"


@app.route("/get-s3buckets")
def getS3Buckets():
    s3 = boto3.client(
            's3'
        )
    response = s3.list_buckets()
    return response




@app.route("/create-s3bucket/<name>" ,methods = ['POST'])
def creates3bucket(name):
    bucket_name = name
    try:
        s3_client = boto3.client(
            's3'
        )
        s3_client.create_bucket(Bucket=name)
        
    except ClientError as e:
        logging.error(e)
        return str(e)
    return "Bucket Created Successfully..."


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
