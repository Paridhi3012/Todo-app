pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Cloning repository...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing backend dependencies...'
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                dir('backend') {
                    bat 'npm test'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                echo 'Building Docker images...'
                bat 'docker-compose build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying containers...'
                bat 'docker-compose up -d'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Checking backend health...'
                bat 'sleep 5 && curl -f http://localhost:5000/health || exit 1'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline succeeded! App is running.'
        }
        failure {
            echo '❌ Pipeline failed. Check logs above.'
        }
    }
}
