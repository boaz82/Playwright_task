pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh """
                    docker build -t boaz_test .
                """
            }
        }
        stage('Run') {
            steps {
                sh """
                    docker run -e TRELLO_PASSWORD=${env.TRELLO_PASSWORD} --rm boaz_test
                """
            }
        }
    }
}
