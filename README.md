# Iso Timer

Minuteur d'exercices isométriques, installable sur PC et téléphone (PWA, hors ligne).
Aucun serveur, aucun compte : la dernière séance est gardée dans le navigateur de l'appareil.

- **Enchaîné** : tous les sets de A (avec pauses), puis B, puis C…
- **Circuit** : A → B → C, répété N tours, sans repos.
- Option « 2 côtés » par exo, avec deux temps de transition réglables (changement d'exo, changement de côté).
- 6 thèmes : Classique, Médiéval, Futuriste, Steampunk, Montagne, Forêt (polices hébergées dans `fonts/`, licence SIL OFL).
- Séances enregistrées (créer, renommer, supprimer), historique avec série de jours et calendrier.
- Voix : annonce de l'exo suivant pendant les pauses, répliques célèbres à mi-effort (synthèse vocale de l'appareil).
- Volume et type de son (bip, doux, cloche, sifflet, synthé ; par défaut selon le thème).
- Sons : départ « bip · bip · biiip », fin « bibip-biip », hauteur différente par exo.

Mise à jour : modifier les fichiers, puis changer `VERSION` dans `sw.js` pour que les appareils récupèrent la nouvelle version.
