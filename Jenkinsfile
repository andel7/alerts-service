pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Get modules') { 
            steps {
                sh 'npm install' 
            }
        }
	stage('Test') { 
            steps {
                sh 'echo "testing the server"
            }
        }
    }
}