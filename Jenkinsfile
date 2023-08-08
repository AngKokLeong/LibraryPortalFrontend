node('workers'){
    try{
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
    catch(err){
        echo "Handling errors."
    }finally {
        echo "Cleaning up"
    }

}