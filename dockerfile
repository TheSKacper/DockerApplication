# Wybierz obraz bazowy
FROM node:14

# Utwórz katalog aplikacji
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności aplikacji
RUN npm install

# Skopiuj resztę plików aplikacji
COPY . .

# Uruchom aplikację
CMD [ "npm", "start" ]

