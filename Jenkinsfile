pipeline {
    agent {
        docker {
            image 'node:7-alpine'
            args '-p 3000:3000' 
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
