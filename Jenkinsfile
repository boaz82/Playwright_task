pipeline {
    agent any
    // Retrieve the passwords that configure in jenkins under Manage Credentials
    environment {
        TRELLO_PASSWORD=credentials('trello_password')
        TRELLO_KEY=credentials('Trello_key')
        TRELLO_TOKEN=credentials('Trello_token')
        POSTMAN_API_KEY=credentials('postman-api-key')
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
                sh ('docker run -e TRELLO_PASSWORD=$TRELLO_PASSWORD -e TRELLO_KEY=$TRELLO_KEY -e TRELLO_TOKEN=$TRELLO_TOKEN --rm boaz_test')
            }
        }
        stage('Run Newman') {
            steps {
                sh ('docker run --rm -t postman/newman run https://api.getpostman.com/collections/19601700-9aba4a64-0676-45e0-b57c-868a2b64f241?apikey=$POSTMAN_API_KEY --env-var "trelloKey=$TRELLO_KEY" --env-var "trelloToken=$TRELLO_TOKEN"')
            }
        }
        stage('Allure Reports') {
            steps {
                script {
                    allure([
                            includeProperties: false,
                            jdk: '',
                            properties: [],
                            reportBuildPolicy: 'ALWAYS',
                            results: [[path: 'allure-report']]
                    ])
                }
            }
        }
    }
    post {
        always {
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
}





// automation_repository = 'https://github.com/boaz82/Playwright_task.git'
// default_branch = 'main'

// pipeline {
//     agent any

//     environment {
//         TRELLO_PASSWORD=credentials('trello_password')
//         TRELLO_KEY=credentials('Trello_key')
//         TRELLO_TOKEN=credentials('Trello_token')
//         POSTMAN_API_KEY=credentials('postman-api-key')
//     }
//     options {
//         disableConcurrentBuilds()
//         buildDiscarder(logRotator(numToKeepStr: '10'))
//     }

//     stages {
//         stage('Clone Project Testing Repository') {
//             steps {
//                 cleanWs()
//                 git(url: automation_repository, branch: default_branch)
//             }
//         }

//         stage('Build') {
//             steps {
//                 sh """
//                     docker build -t boaz_test .
//                 """
//             }
//         }
//         stage('Run') {
//             steps {
//                 sh ('docker run -e TRELLO_PASSWORD=$TRELLO_PASSWORD -e TRELLO_KEY=$TRELLO_KEY -e TRELLO_TOKEN=$TRELLO_TOKEN --rm boaz_test')
//             }
//         }
//         stage('Run Newman') {
//             steps {
//                 sh ('docker run --rm -t postman/newman run https://api.getpostman.com/collections/19601700-9aba4a64-0676-45e0-b57c-868a2b64f241?apikey=$POSTMAN_API_KEY --env-var "trelloKey=$TRELLO_KEY" --env-var "trelloToken=$TRELLO_TOKEN"')
//             }
//         }

//         stage('ALLURE') {
//             steps {
//                 sh """
//                 ls -a ${WORKSPACE}
//                 """
//                 script {
//                     ws("$workspace/docker test/"){
//                         allure([
//                             includeProperties: false,
//                             jdk: '',
//                             properties: [],
//                             reportBuildPolicy: 'ALWAYS',
//                             results: [[path: "allure-results"]]
//                         ])
//                     }
//                 }
//             }
//         }
//     }
// }