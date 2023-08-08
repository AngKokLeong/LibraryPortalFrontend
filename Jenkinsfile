pipeline {
    agent {
        label 'workers'
        //docker {
        //    image 'node:lts-hydrogen'
        //    args '-p 3000:3000'
        //}
    }

    stages {
        stage ('Checkout') {
            steps {
                checkout scm
            }
        }

        /*stage ('Quality Test'){
            steps {

            }
        }

        stage ('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage ('Unit Tests') {
            steps {
                echo "Current "
            }
        }

        stage ('Security Tests'){
            steps {

            }
        }

        stage ('Build') {
            steps {

            }
        }

        stage ('Push'){
            steps {

            }
        }*/

    }

}