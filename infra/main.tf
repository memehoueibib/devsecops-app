terraform {
  required_version = ">= 1.0"
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

# Réseau Docker pour nos conteneurs
resource "docker_network" "devsecops_network" {
  name = "devsecops-network"
}

# Volume pour Minikube
resource "docker_volume" "minikube_volume" {
  name = "minikube-data"
}

# Configuration pour base de données (PostgreSQL)
resource "docker_image" "postgres" {
  name = "postgres:15"
}

resource "docker_container" "postgres" {
  name  = "devsecops-postgres"
  image = docker_image.postgres.image_id
  
  ports {
    internal = 5432
    external = 5432
  }
  
  env = [
    "POSTGRES_DB=devsecops",
    "POSTGRES_USER=admin",
    "POSTGRES_PASSWORD=securepass123"
  ]
  
  volumes {
    host_path      = "${path.cwd}/data"
    container_path = "/var/lib/postgresql/data"
  }
  
  networks_advanced {
    name = docker_network.devsecops_network.name
  }
}

output "postgres_ip" {
  value = docker_container.postgres.network_data[0].ip_address
}