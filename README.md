<div align="center" id="top"> 
  <h1 align="center">🍴 Le Bistrot Gourmand</h1>
  <img src="./logo.png" alt="Strapi GrandEmpereur" width="150" height="150" />

  &#xa0;
  
</div>

<h1 align="center">Strapi GrandEmpereur</h1>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-fonctionnalités">Fonctionnalités</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-prérequis">Prérequis</a> &#xa0; | &#xa0;
  <a href="#wrench-configuration-du-fichier-env">Variables d'environnement</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/GrandEmpereur" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

Le projet "Le Bistrot Gourmand" est un site web de restauration développé à l'aide de Strapi, un puissant CMS headless open-source, et de React pour le front-end. Cette solution innovante permet aux propriétaires de restaurants de gérer facilement leur contenu et d'offrir une expérience utilisateur fluide et agréable à leurs clients.

Grâce à l'architecture headless, le back-end et le front-end sont séparés, ce qui permet une plus grande flexibilité et évolutivité. Strapi permet de gérer les données et le contenu du site web, tandis que React s'occupe de la présentation et de l'interaction avec l'utilisateur.

## :sparkles: Fonctionnalités ##

:heavy_check_mark: Création de pages dynamiques avec des composants Strapi (image & texte, slider, affichage des restaurants sous forme de cartes)
:heavy_check_mark: Navigation dynamique pour faciliter la navigation sur le site
:heavy_check_mark: Formulaire de contact intégré pour permettre aux clients de contacter facilement le restaurant
:heavy_check_mark: Réservation en ligne pour faciliter la gestion des réservations pour les propriétaires de restaurants
:heavy_check_mark: Front-end React pour l'affichage des éléments via des appels API, assurant une expérience utilisateur fluide et performante

## :rocket: Technologies ##
Les outils suivants ont été utilisés dans ce projet :

- [Strapi](https://strapi.io/) (avec TypeScript)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/) (avec TypeScript)
- [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/)


## :white_check_mark: Prérequis ##

Avant de commencer :checkered_flag:, vous devez avoir les logiciels suivants installés sur votre machine :

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/) (version 18)
- [Yarn](https://yarnpkg.com/)
- [NPM](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (Docker App)

## :wrench: Configuration du fichier Env ##

Pour configurer les variables d'environnement, vous devez copier les fichiers d'exemple et modifier les valeurs en fonction de votre environnement.

### Back-end (Strapi)

1. Accédez au dossier `back-end` :

```bash
$ cd back-end
```
2. Copiez le fichier `.env.example` et créez un fichier `.env` :

```bash
$ cp .env.example .env
```
3. Modifiez les valeurs du fichier `.env` pour correspondre à votre configuration.
```md
# Server
HOST=0.0.0.0
PORT=1337
APP_KEYS=SMTpUdDSFWMbTPw3O3E8lQ==,tTLv6xeTkJuhJ8fVzAsbdQ==,GfLM6k3eYymaODgbWS2I0Q==,mGcxU1qBGCuXwbUzrsC/GA==
API_TOKEN_SALT=x/qbScY+QsqESF1FdfjXgA==
ADMIN_JWT_SECRET=ECSImg5TdbVhzD0twqOGqQ==
TRANSFER_TOKEN_SALT=bnE5iNFVyIVDbkD0mxuauw==

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=strapidb
DATABASE_USERNAME=Admin
DATABASE_PASSWORD=admin
DATABASE_SSL=false
JWT_SECRET=zdSoYgvbniHsGxA3apUpTg==
```

### Front-end (React)

1. Accédez au dossier `front-end` :
```bash
$ cd ..
$ cd front-end
```

2. Copiez le fichier `.env.example` et créez un fichier `.env` :
```bash
$ cp .env.example .env
```

3. Modifiez les valeurs du fichier `.env` pour y ajouter le bearer token de Strapi.

## :checkered_flag: Starting ##

```bash
# Clonez ce projet
$ git clone git@github.com:IIM-Creative-Technology/strapi-GrandEmpereur.git

# Accédez au dossier
$ cd strapi-grandempereur

# Installez les dépendances du back-end (Strapi)
$ cd back-end

# Installez et démarrez Strapi avec Docker
$ docker-compose build

# Installez et démarrez Strapi avec Docker
$ docker-compose up

# Revenez au répertoire racine
$ cd ..

# Accédez au dossier front-end (React)
$ cd front-end

# Installez les dépendances
$ yarn

# Démarrez le projet
$ yarn start
```


## :checkered_flag: Starting ##

```bash
# Clonez ce projet
$ git clone git@github.com:IIM-Creative-Technology/strapi-GrandEmpereur.git

# Accédez au dossier
$ cd strapi-grandempereur

# Installez les dépendances du back-end (Strapi)
$ cd back-end

# Installez et démarrez Strapi avec Docker
$ docker-compose build

# Installez et démarrez Strapi avec Docker
$ docker-compose up

# Revenez au répertoire racine
$ cd ..

# Accédez au dossier front-end (React)
$ cd front-end

# Installez les dépendances
$ yarn

# Démarrez le projet
$ yarn dev
```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/GrandEmpereur" target="_blank">Patrick Bartosik</a>

&#xa0;

<a href="#top">Back to top</a>

