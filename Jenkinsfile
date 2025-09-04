pipeline {
    agent any
    tools
    { 'nodejs' 'node24'
    }
    stages {
        stage('Clean Dependencies') {
            steps {
                sh "npm cache clean --force"
            }
        }
        stage('Install Dependencies') {
            steps {
                sh "npm install --no-audit"
            }
        }
        
        stage("Dependencies Checks"){
            parallel {
        stage("NPM Check"){
            steps {
            dependencyCheck additionalArguments: '''--scan \'./\' --format ALL''', odcInstallation: 'dep121-3'
            
            junit allowEmptyResults: true, keepProperties: true, keepTestNames: true, testResults: 'dependency-check-junit.xml'
            
            publishHTML([allowMissing: true, alwaysLinkToLastBuild: true, icon: '', keepAll: true, reportDir: './', reportFiles: 'dependency-check-jenkins.html', reportName: 'Dependency Checl HTML', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
     stage("NPM audit"){
            steps{
                sh '''
                npm audit fix --force
                npm audit --audit-level=critical
                '''
            }
            }
    }
}
}}