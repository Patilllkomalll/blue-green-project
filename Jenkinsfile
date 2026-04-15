node {
    stage('Build & Deploy') {
        dir('C:\\Users\\JIGNESHA\\OneDrive\\Desktop\\blue-green-project') {
            bat 'docker compose down'
            bat 'docker compose build'
            bat 'docker compose up -d'
        }
    }
}