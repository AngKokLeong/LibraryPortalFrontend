pipeline {
        agent none

        environment {
            PRODUCTION = 'master'
            PREPROD = 'preprod'
            DEVELOP = 'develop'
            DOCKERFILE_NAME = 'Dockerfile.test'
            IMAGE_NAME = 'library-portal-frontend'
        }

        stages {
            stage ('Checkout') {
                agent any

                steps {
                    checkout scm
                }
            }

            stage ('Pre-Integration Test'){

                failFast true
                parallel {

                    stage ('Quality Test'){
                        steps {
                            echo 'On Quality Test'
                            script {
                                def imageTest= docker.build('${IMAGE_NAME}-test -f Dockerfile.test .')

                                imageTest.inside{
                                    sh 'npx eslint ./src'
                                }
                            }
                        }
                    }
                    stage ('Unit Test'){
                        
                        steps {
                            echo 'On Unit Test'
                            //run the unit test
                        }
                    }
                    stage ('Security Test'){

                        steps {
                            echo 'On Security Test'
                        }
                    }
                }
                
            }

            stage ('SonarQube Analysis') {
                failFast true
                parallel {
                    stage ('Static Code Analysis'){
                        agent any
                        steps {
                            withSonarQubeEnv('sonarqube') {
                                sh 'sonar-scanner'
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

                }

            }

            stage ('Build') {
                agent any

                steps {
                    echo 'On Build'
                    //run the npm build
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
                    //push to sonatype
                }
            }

            stage ('Deploy Pre-Production'){
                agent any
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
                agent any

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