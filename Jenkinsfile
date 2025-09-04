pipeline {
    agent any
    tools
    { 'nodejs' 'node24'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                sh "npm install --no-audit"
            }
        }
     stage("NPM audit"){
            steps{
                npm audit --audit-level=critical
            }
            }
    }
}