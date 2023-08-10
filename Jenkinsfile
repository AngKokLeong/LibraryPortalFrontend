//objective: to find a way to allow different branches to have different stage
// possible moves: use when and allOf by checking branches and 

pipeline {
        agent none
        
        environment {
            PRODUCTION = 'master'
            PREPROD = 'preprod'
            DEVELOP = 'develop'
        }
        stages{
            stage ('Checkout') {
                agent any

                steps {
                    checkout scm
                }
            }
            //setup parallel job to execute the test
            stage ('Pre-Integration Test'){

                // to exit the stage quickly if anyone of the stage fails
                failFast true
                parallel {
                    stage ('Quality Test'){
                        agent any

                        steps {
                            echo "On Quality Test"
                        }
                    }
                    stage ('Unit Test'){
                        agent any

                        steps {
                            echo "On Unit Test"
                        }
                    }
                    stage ('Security Test'){
                        agent any

                        steps {
                            echo "On Security Test"
                        }
                    }
                }
                
            }
            stage ('Build') {
                steps {
                    echo "On Build"
                }
            }

           
        }
}