node {
    stage('Build & Deploy') {
        bat 'docker compose down'
        bat 'docker compose build --no-cache'
        bat 'docker compose up -d'
    }
}