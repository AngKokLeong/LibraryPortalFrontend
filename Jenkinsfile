//objective: to find a way to allow different branches to have different stage
// possible moves: use when and allOf by checking branches and 

pipeline {
        agent any
        environment {
            PRODUCTION = 'master'
            PREPROD = 'preprod'
            DEVELOP = 'develop'

        }
        stages{
            stage ('Checkout') {
                steps {
                    checkout scm
                }

            }

           
        }
}