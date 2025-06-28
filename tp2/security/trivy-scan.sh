#!/bin/bash

echo "🔍 Scan de sécurité des images Docker avec Trivy..."

# Scan du backend
echo "Scan de l'image backend..."
trivy image --severity HIGH,CRITICAL --format json --output backend-scan.json devsecops-backend:latest

# Afficher un résumé
echo "📊 Résumé du scan backend :"
trivy image --severity HIGH,CRITICAL devsecops-backend:latest

echo "✅ Scan Trivy terminé. Résultats détaillés dans backend-scan.json"