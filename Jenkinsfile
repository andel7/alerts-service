pipeline {
    agent {
        docker {
            image 'node:8.9.3-wheezy'
	    args '-u 0 -v /tmp:/app'
        }
    }
    stages {
        stage('Install packages') { 
            steps {
                sh 'npm install' 
		sh 'cp -r ./ /app'
            }
        }
	stage('Test') { 
            steps {
                sh 'echo "Testing server"'
            }
        }
	stage('Create Docker image') {
	       agent any
		steps {
			sh 'cp /tmp'
			sh 'docker images'
			sh 'docker build -t  alerts-service .'
			sh 'docker images'
		}	       
	}
    }
}
