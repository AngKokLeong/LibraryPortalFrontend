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
                agent any

                steps {
                    echo "On Build"
                }
            }
            stage ('Push') {
                agent any

                when {
                    anyOf {
                        branch '${PRODUCTION}'
                        branch '${PREPROD}'
                        branch '${DEVELOP}'
                    }
                }

                steps {
                    echo "On Push"
                }
            }
            stage ('Deploy') {
                agent any

                when {
                    anyOf {
                        branch '${PRODUCTION}'
                        branch '${PREPROD}'
                    }
                }

                steps {
                    echo "On Deploy"
                }
            }


        }
}