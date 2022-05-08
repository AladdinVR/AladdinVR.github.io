# Bienvenue sur le site du CNC !

Ce ReadME a pour vocation d'expliquer comment fonctionne le site pour que d'autres personnes puissent participer au projet. Il a été mis à jour le 8 mai 2022.

Deux cas de figures se distinguent :

- Vous n'ếtes pas programmeur et vous voulez simplement éditer les articles du site
- Vous voulez modifier la structure du code ou l'enrichir

## Vous voulez mettre à jour un article:

Pour modifier le site directement, sans faire de tests au prélable, assurez-vous que la branche sélectionnée soit `main`.

![Tuto Branche Main](./TutoBrancheMain.png)

Tout se passe dans le dossier `public`:

### Modifier du texte:

Pour modifier les textes, rendez-vous dans le dossier `markdown`. Ce dossier contient, deux sous-dossiers : `en` et `fr`. Ce sont les langues disponibles sur le site. Si vous rajoutez du texte, tachez au maximum de modifier les deux langues en même temps pour éviter les décalages entre les différentes langues.

Note : Sans modifier le code, vous ne pourrez pas rajouter une nouvelle langue.

À l'heure actuelle, il y a 5 onglets sur le site : `Accueil`, `Nous rejoindre`, `Histoire du Club`, `Nos Chansons` et `Record du club`. L'onglet `Record du club` ne possède pas de texte, il contient uniquement les records du clubs (nous y reviendrons plus tard).

Pour changer le texte d'un onglet il suffit de sélectionner le fichier .md dont le nom correspond à l'onglet ! Par exemple si je veux ajouter du texte sur la page d'accueil, je peux aller dans `fr` et choisir le fichier `home.md`.
Le langage utilisé pour les textes s'appelle `le markdown`, c'est un langage qui permet d'écrire en gras, d'ajouter des images, de mettre des titres, etc.
Un tutoriel est disponible [ici](https://github.com/luong-komorebi/Markdown-Tutorial/blob/master/README_fr.md). Ne vous inquiétez pas, ce langage est simple à prendre en main.

Une fois votre fichier sélectionné, cliquez sur le crayon pour passer en mode "modification".

![Tuto edit text](./TutoEditText.png)

Une fois que vous êtes content de vos modifications, vous pouvez vous rendre tout en bas du fichier pour publier vos changements (`commit` dans le jargon).

Ajouter un nom à votre commit, ce nom doit décrire ce que vous ajoutez (par exemple "mise à jour des tarifs du club"). Une fois le nom défini, sélectionnez `commit directly to the main branch` et appuyez sur `commit changes` pour valider vos changements. **Attention, une fois que vous aurez appuyé sur ce bouton le texte sera mis en production sur le site.** Une fois validé, un déploiement automatique de vos modifications vas s'effectuer (cela dure environ 5 minutes) vous pouvez alors visionner le rendu sur le site du club (il vous faudra peut être aller en navigation privée au début car votre navigateur peut conserver en cache l'ancienne version du site).

### Ajouter une image:

Pour ajouter une image il faudra modifier plusieurs fichiers.

D'abord, rendez-vous dans le dossier `pictures` du dossier `public`. Comme pour la partie texte, sélectionnez le dossier correspondant à l'onglet où se situera votre image (pour l'instant trois onglets possèdent des images: `Histoire du Club`, `Nous rejoindre` et `Accueil`). Si jamais vous voulez créer un nouveau dossier vous
pouvez appuyer sur `Add a file` et `create new file` puis il vous faudra terminer le nom de votre dossier par **/**.

Sinon, dans le cas usuel, rendez vous dans le dossier de l'onglet qui vous intéresse et sélectionnez `Add a file` puis `upload files`, choisissez votre fichier et publiez le (en cliquant sur le bouton `commit` comme pour la partie précedente).

Maintenant qu'une nouvelle image a été ajoutée, il faut l'intégrer au texte de l'onglet ! Pour cela, rendez vous sur le fichier markdown de l'onglet qui vous intéresse (comme pour la partie précédente, attention au langues !). Repérez l'endroit où vous voulez ajouter votre image. Et ajouter ce texte: `<img src="/pictures/nom_de_longlet/nomdelaphoto" alt="texte alternatif pour remplacer l'image en cas de problème" />`. Cet ligne s'appelle une balise html, et c'est elle qui indique où ajouter l'image, et laquelle on veut. On précise l'origine de l'image avec src="chemin_vers_la_photo" et le texte alternatif avec alt. Vous pouvez vous inspirez de ce qui est déjà présent pour ajouter votre image.
**Attention, pensez à sauter une ligne avant et après l'image pour qu'elle s'affiche correctement.**

Comme d'habitude, une fois le fichier modifier, il faut commit le changement.

### Mettre à jour les records du club:

Pour mettre à jour les records du club nous allons nous intéresser à un autre dossier de public: le dossier `records`.
Ce dossier contient les records du club, il est rangé comme suit :

- individual/relay pour distinguer une épreuve individuelle ou un relais

- male/female/mixt pour distinguer le sexe des personnes qui ont fait un record (à noter que mixt n'est actuellement là que pour le 10x50m NL)

- nom_la_catégorie.csv : le fichier qui contient les records d'une certaine catégorie. Pour la culture, csv signigie _coma separated values_ c'est à dire _valeurs séparées par des virgules_, c'est un type de données très commun.

Voici la structure d'un fichier csv:

1. Pour les épreuves individuelles :

**nom de la nage(en anglais),distance,Nom,Prénom,temps(min:secondes.centièmes),lieu,date(jj/mm/aaaa)**

Attention à bien respecter la structure de se fichier, sinon les données ne s'afficheront pas correctement.

2. Pour les épreuves en relais :

Pour le premier relayeur :

**nom de la nage(en anglais),distance,Nom,Prénom,temps de l'équipe(min:secondes.centièmes),lieu,date(jj/mm/aaaa)**

Pour les autres relayeurs:

**,,Nom,Prénom**

Et comme d'habitude, une fois que le fichier est modifié, vous pouvez commit le changement.
