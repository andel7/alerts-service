pipeline {
    agent none
    stages {
        stage('Install packages') {
	agent {   
	docker {
            image 'node:8.9.3-wheezy'
	    args '-u 0 -v /tmp:/app'
            }
	}
         steps {
                sh 'npm install' 
		sh 'cp -r ./ /app'
		sh 'echo "Testing server"'
           }
        }
	stage('Create Docker image') {
	       agent any
		steps {
			sh 'cd /tmp'
			sh 'docker images'
			sh 'docker build -t  alerts-service .'
			sh 'docker images'
	        }	       
	}
    }
}
