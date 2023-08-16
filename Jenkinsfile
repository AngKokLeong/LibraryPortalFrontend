pipeline {
        agent any

        options {
            parallelsAlwaysFailFast()
        }
        environment {
            PRODUCTION = 'master'
            PREPROD = 'preprod'
            DEVELOP = 'develop'
            DOCKERFILE_NAME = 'Dockerfile.test'
            IMAGE_NAME = 'library-portal-frontend'
        }

        stages {
            stage ('Checkout') {
                steps {
                    checkout scm
                }
            }

            /*stage ('Pre-Integration Test'){
                parallel {

                    stage ('Quality Test'){
                        agent any
                        steps {
                            echo 'On Quality Test'
                            //https://eslint.org/docs/latest/use/command-line-interface#--max-warnings
                            //purpose: to get the return value
                            //https://www.jenkins.io/doc/pipeline/steps/workflow-durable-task-step/#sh-shell-script
                            sh 'npx eslint ./src'
                        }
                    }
                    stage ('Unit Test'){
                        agent any
                        steps {
                            echo 'On Unit Test'
                            //run the unit test
                        }
                    }
                    stage ('Security Test'){
                        agent any
                        steps {
                            echo 'On Security Test'
                        }
                    }
                }
                
            }*/

          
            stage ('Static Code Analysis'){
                        steps {
                            script {
                            // requires SonarQube Scanner 2.8+
                                scannerHome = tool 'SonarQube-Scanner'
                            }
                            withSonarQubeEnv('SonarQube-Library-Portal-Frontend') {
                                sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=Library-Portal-Frontend -Dsonar.language=typescript -Dsonar.sources=src"
                            }
                        }
            }
            stage ('Quality Gate'){
                    
                        steps {
                            timeout(time: 5, unit: 'MINUTES') {
                                waitForQualityGate abortPipeline: true
                            }
                        }
            }

                

            

            stage ('Build') {
           

                steps {
                    echo 'On Build'
                    //run the npm build
                }
            }
            stage ('Push') {
           

                when {
                    anyOf {
                        branch '${PRODUCTION}'
                        branch '${PREPROD}'
                        branch '${DEVELOP}'
                    }
                }

                steps {
                    echo "On Push"
                    //push to sonatype
                }
            }

            stage ('Deploy Pre-Production'){
                
                when {
                    anyOf {
                        branch '${PREPROD}'
                    }
                }

                steps {
                    echo "On Deploy Pre Production"
                }
            }

            stage ('Deploy Production') {
                

                when {
                    anyOf {
                        branch '${PRODUCTION}'
                    }
                }

                steps {
                    echo "On Deploy Production"
                }
            }

        }
}