# Documentation du Code HTML

## Structure de base

- `<!doctype html>` : Définit le type de document comme HTML5.
- `<html lang="fr">` : Balise racine indiquant que le contenu est en français.

## Métadonnées

- `<head>` : Contient les métadonnées du document.
  - `charset="UTF-8"` : Définit l'encodage des caractères en UTF-8.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` : Réglage de la vue initiale pour les appareils mobiles.
  - `<title>Répare.</title>` : Titre de la page.

## Liens et scripts

- Les balises `<link>` et `<script>` importent des ressources externes :
  - Feuille de style CSS (`style.css`).
  - Favicon (`/vite.svg`).
  - Polices depuis Google Fonts.
  - Script JavaScript (`slider.js`).

## Structure de la page

- `header` : Contient le logo et un bouton de contact.
- `div.baseline` : Section avec un titre, un sous-titre et une image.
- `div.contentSlider` : Zone du slider d'images avec des boutons pour naviguer.
- `div.dotSlider` : Liste de marqueurs pour le slider.
- `div.divGeo` : Section avec une carte et du texte géographique.
- `div.divCTA` : Appel à l'action avec un bouton de contact.
- `div.divQui` : Présentation de l'équipe avec texte et image.
- `div.divTextFin` : Section finale avec un titre et un paragraphe.
- `footer` : Section de pied de page avec des boutons et des liens.

## Contenu

- Utilisation d'éléments `<img>` pour les images.
- Utilisation de balises de titre `<h2>` et de paragraphes `<p>` pour le texte.
- Des boutons `<button>` sont utilisés pour les interactions utilisateur.

## À noter

- Il y a quelques erreurs dans la structure des balises HTML (comme un `</div>` manquant dans le header, un tag `</a>` non fermé dans le footer, etc.).
- Les classes CSS référencées (`style.css`) ne sont pas fournies ici et peuvent définir la mise en page et le style.
