#!groovy

node {

    try {
        stage('Checkout') {

            // sh 'git fetch'
            // sh "git log HEAD..origin/${env.BRANCH_NAME} --pretty=format:\"%h - %an, %ar: %s\" > GIT_CHANGES"
            // def lastChanges = readFile('GIT_CHANGES')
            // slackSend color: "warning", message: "Started `${env.JOB_NAME}#${env.BUILD_NUMBER}`\n\n_The changes:_\n${lastChanges}"
            // checkout scm

            checkout scm

            sh "git log HEAD^..HEAD --pretty=format:\"%h - %an, %ar: %s\" > GIT_CHANGES"
            def lastChanges = readFile('GIT_CHANGES')
            slackSend color: "warning", message: "Started `${env.JOB_NAME}#${env.BUILD_NUMBER}`\n\n_Last commit:_\n${lastChanges}"

        }
        stage('Setup environment') {
            echo 'Setup environment'
        }
        stage('Test') {
            echo 'Test'
        }
        stage('Publish results') {
            slackSend color: "good", message: "Build successful: `${env.JOB_NAME}#${env.BUILD_NUMBER}` <${env.BUILD_URL}|Open in Jenkins>"
        }
    }
    catch (err) {
        slackSend color: "danger", message: "Build failed :face_with_head_bandage: \n`${env.JOB_NAME}#${env.BUILD_NUMBER}` <${env.BUILD_URL}|Open in Jenkins>"

        throw err
    }
}

