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
		sh 'mkdir /app/build/ || echo "dir exists"'
		sh 'cp -r ./* /app/build/'
		sh 'echo "Testing server"'
           }
        }
	stage('Create Docker image') {
	       agent any
		steps {
			sh 'cd /tmp/build'
			sh 'docker images'
			sh "docker build -t  itamar/${JOB_NAME}:${BUILD_NUMBER} ."
			sh 'docker images'			
			sh "docker login -u itamar -p Aa123123"
	                sh "docker push itamar/${JOB_NAME}:${BUILD_NUMBER}"
	        }	       
	}
    }
}
