#!/bin/bash

# Colores para los mensajes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Iniciando despliegue del frontend...${NC}"

# 1. Verificar si hay cambios sin commitear
if [[ -n $(git status -s) ]]; then
    echo -e "${RED}⚠️  ¡ATENCIÓN! Hay cambios sin commitear:${NC}"
    git status
    echo -e "${RED}❌ Por favor, haz commit de tus cambios antes de desplegar${NC}"
    exit 1
fi

# 2. Instalar dependencias si hay cambios en package.json
echo -e "${YELLOW}📦 Instalando dependencias...${NC}"
npm install

# 3. Construir la aplicación
echo -e "${YELLOW}🔨 Construyendo la aplicación...${NC}"
npm run build

# 4. Limpiar la caché de nginx
echo -e "${YELLOW}🧹 Limpiando caché de nginx...${NC}"
sudo rm -rf /var/cache/nginx/*

# 5. Reiniciar nginx
echo -e "${YELLOW}🔄 Reiniciando nginx...${NC}"
sudo systemctl restart nginx

# 6. Verificar que nginx está funcionando
echo -e "${YELLOW}✅ Verificando configuración de nginx...${NC}"
sudo nginx -t

echo -e "${GREEN}✨ ¡Despliegue completado!${NC}"
echo -e "${GREEN}🌐 La aplicación está disponible en:${NC}"
echo -e "   - https://canadabcexperience.com"
echo -e "   - https://www.canadabcexperience.com"
echo -e "   - https://canadabcexperience.es"
echo -e "   - https://www.canadabcexperience.es" 