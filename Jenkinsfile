pipeline {
    agent any

    options {
        disableConcurrentBuilds()
        timeout(time: 10, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    triggers { pollSCM('* * * * *') }

    stages {
        stage('Deploy portfolio') {
            steps {
                sh '''
                    ssh -i "$HOME/.ssh/portfolio_deploy" \
                        -o BatchMode=yes -o IdentitiesOnly=yes \
                        -o StrictHostKeyChecking=yes -o ConnectTimeout=15 \
                        vladislav@172.19.0.1 "deploy $GIT_COMMIT"
                '''
            }
        }
    }
}
