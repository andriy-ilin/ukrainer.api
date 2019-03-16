#!/bin/bash

# Install awsebcli
pip install --user --upgrade awsebcli

# Configure AWS credentials for Elastic Beanstalk
mkdir -p ~/.aws
echo '[profile eb-cli]' > ~/.aws/config
echo "aws_access_key_id = $AWS_ACCESS_KEY_ID" >> ~/.aws/config
echo "aws_secret_access_key = $AWS_SECRET_ACCESS_KEY" >> ~/.aws/config

eb status

# Deploy application to the appropriate ElasticBeanstalk env
eb deploy $EB_ENV -v
rm ~/.aws/config
