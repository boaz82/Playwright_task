pipeline {
    agent {
        Dockerfile true
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
                sh """
                    docker run --rm boaz_test
                """
            }
        }
    }
}
