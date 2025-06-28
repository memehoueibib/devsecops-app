variable "project_name" {
  description = "Nom du projet"
  type        = string
  default     = "devsecops-app"
}

variable "environment" {
  description = "Environnement (dev/test/prod)"
  type        = string
  default     = "dev"
}

variable "postgres_password" {
  description = "Mot de passe PostgreSQL"
  type        = string
  default     = "securepass123"
  sensitive   = true
}