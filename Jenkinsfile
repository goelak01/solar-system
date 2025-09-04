pipeline {
    agent any
    tools
    { 'nodejs': 'node24'
    }
    stages {
        stage('Hello') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }
}