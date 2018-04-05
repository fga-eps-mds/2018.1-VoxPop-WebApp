#!groovy

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
            checkout scm
            slackSend color: "warning", message: "Started `${env.JOB_NAME}#${env.BUILD_NUMBER}`"
            }
        }
        stage('Setup environment') {
            steps {
                echo 'Setup environment'

            }
        }
        stage('Test') {
            steps {
                echo 'Test'
            }
        }
        stage('Homologation deploy') {
            when {
                branch 'dev'
            }
            steps {
                sh 'ansible-playbook -i provision/hosts provision/hml/deploy.yml'
            }
        }
        stage('Production deploy') {
            when {
                branch 'master'
            }
            steps {
                sh 'ansible-playbook -i provision/hosts provision/prod/deploy.yml'
            }
        }
    }
    post {
        success {
            slackSend color: "good", message: "Build successful: `${env.JOB_NAME}#${env.BUILD_NUMBER}` <${env.BUILD_URL}|Open in Jenkins>"
        }
        failure {
            slackSend color: "danger", message: "Build failed :face_with_head_bandage: \n`${env.JOB_NAME}#${env.BUILD_NUMBER}` <${env.BUILD_URL}|Open in Jenkins>"
        }
    }
}
