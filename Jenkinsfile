//objective: to find a way to allow different branches to have different stage
// possible moves: use when and allOf by checking branches and 

pipeline {
        agent any
        options {
            parallelsAlwaysFailFast()
        }
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
            //setup parallel job to execute the test
            stage ('Pre-Integration Test'){

                // to exit the stage quickly if anyone of the stage fails
                failFast true
                parallel {
                    stage ('Quality Test'){
                        agent {
                            label "Quality Test Agent"
                        }
                        steps {
                            echo "On Quality Test"
                        }
                    }
                    stage ('Unit Test'){
                        agent {
                            label "Unit Test Agent"
                        }
                        steps {
                            echo "On Unit Test"
                        }
                    }
                    stage ('Security Test'){
                        agent {
                            label "Security Test Agent"
                        }
                        steps {
                            echo "On Security Test"
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
}