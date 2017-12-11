pipeline {
    agent {
        docker {
            image 'node:8.9.3-wheezy'
	    args '-u 0'
        }
    }
    stages {
        stage('Install packages') { 
            steps {
                sh 'npm install' 
            }
        }
	stage('Test') { 
            steps {
                sh 'echo "Testing server"'
            }
        }
	stage('Create Docker image'){
	       agent any
	       sh 'docker images'
	       sh 'docker build -t  alerts-service .'
	       sh 'docker images'
	}
    }
}
