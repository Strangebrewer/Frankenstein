pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'docker image build -t frankenstein:1.0 .'
                sh 'docker container run --detach -p 3001:3001 frankenstein:1.0'
            }
        }
    }
}