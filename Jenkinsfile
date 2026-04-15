node {
    stage('Build & Deploy') {
        bat 'docker compose down'
        bat 'docker compose build'
        bat 'docker compose up -d'
    }
}