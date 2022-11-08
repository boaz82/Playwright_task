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
                // sh """
                //     docker run -e TRELLO_PASSWORD=${env.TRELLO_PASSWORD} -e TRELLO_KEY=${env.TRELLO_KEY} -e TRELLO_TOKEN=${env.TRELLO_TOKEN} --rm boaz_test
                // """

                sh docker run -e TRELLO_PASSWORD=credentials('TRELLO_PASSWORD') -e TRELLO_KEY=credentials('TRELLO_KEY') -e TRELLO_TOKEN=credentials('TRELLO_TOKEN') --rm boaz_test
                
            }
        }
    }
}
