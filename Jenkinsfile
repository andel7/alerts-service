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
                sh 'echo "testing the server"'
            }
        }
    }
}
