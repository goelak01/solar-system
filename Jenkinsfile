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
        
        satge("Dependencies Check"){
            parallel {
        stage("Dependency Check"){
            steps {
            dependencyCheck additionalArguments: '', odcInstallation: 'dep121-3'
            
            
            }
        }
     stage("NPM audit"){
            steps{
                sh '''
                npm audit --audit-level=critical
                echo $?
                '''
            }
            }
    }
}
}}