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
        
        stage("Dependencies Checks"){
            parallel {
        stage("NPM Check"){
            steps {
            dependencyCheck additionalArguments: '', odcInstallation: 'dep121-3'
            
            
            }
        }
     stage("NPM audit"){
            steps{
                sh '''
                npm audit --audit-level=critical
                if $? !=0:
                npm audit fix --force
                fi
                '''
            }
            }
    }
}
}}