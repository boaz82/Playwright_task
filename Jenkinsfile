pipeline {
    agent any
    environment {
        TRELLO_PASSWORD=credentials('trello_password')
        TRELLO_KEY=credentials('Trello_key')
        TRELLO_TOKEN=credentials('Trello_token')
    }

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
                // sh """
                //     docker run -e TRELLO_PASSWORD=${env.TRELLO_PASSWORD} -e TRELLO_KEY=${env.TRELLO_KEY} -e TRELLO_TOKEN=${env.TRELLO_TOKEN} --rm boaz_test
                // """

                sh ('docker run -e TRELLO_PASSWORD=$TRELLO_PASSWORD -e TRELLO_KEY=$TRELLO_KEY -e TRELLO_TOKEN=$TRELLO_TOKEN --rm boaz_test')
                
            }
        }
    }
}
