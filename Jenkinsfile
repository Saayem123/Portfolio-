pipeline {
    agent any  // Use the appropriate agent, it could be a Windows node

    stages {
        stage('Git Checkout and Pull') {  // Stage to ensure the latest code is pulled from the repository
            steps {
                // Checkout the correct branch or create it if it doesn't exist, then pull the latest changes
                bat 'git checkout portfolio_project || git checkout -b portfolio_project origin/portfolio_project'
                bat 'git pull origin portfolio_project'
            } 
        }

        stage('Docker Build and Run') {  // Stage to build and start the Docker container
            steps {
                // Build the Docker image and run the container
                bat 'docker build -t portfolio-app .'
                bat 'docker run -d -p 3000:3000 --name portfolio-container portfolio-app'
            }
        }
    }
}