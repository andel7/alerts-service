pipeline {
    agent {
        docker {
            image '8.9.3-alpine'
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
