# Test Malou 🌮
    Bonjour !
    Le projet a été réalisé avec nodeJS & ReactJS.
    Le projet a pour but de récuperer et afficher les produits de "Product Hunt" selon une date précise.
    Une seule route est implémentée côté serveur : GET -> '/api/posts/:date'.
    4 Composants fonctionnels sont implémentés : 
        - App (gère l'appel à l'API node, le DatePicker, les produits et la pagination)
        - Product (affiche un produit sous forme de `Card` bootstrap)
        - Pagination (affiche le nombre de produit retournée 3 par 3)
        - Chart (affiche le nombre de produit par catégorie [un produit possède plusieurs catégorie])

## Installer et Lancer le projet

``` bash
# Installer NodeJS
https://nodejs.org/en/

# Installer les dépendences pour le serveur
npm install

# Installer les dépendences pour le client
npm run client-install

# Lancer le serveur et le client en même temps
npm run dev

# Lancer le serveur uniquement
npm run server

# Lancer le client uniquement
npm run client

# Serveur : http://localhost:5000 & Client : http://localhost:3000
```

### Infos

La responsivité n'est pas très bien géré
Le fichier .env a volontairement été laissé, si vous voulez utiliser votre propre clef token, il suffit de vous créer un compte API à Product Hunt.

### Note
Le code serveur n'est pas utile ici car il s'agit simplement d'un appel à une API externe.
L'appel aurait pu être géré côté client.

### Auteur

Raimbault Fantin
