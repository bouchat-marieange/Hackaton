# Hackaton
Hackaton - Cookies

*Pseudocode Cookie-clikeur by Steeve, Marie-Ange, Antoine, Laureen et Syl*

\\Accès au jeu cookie-clikeur via interface web

__DEBUT__
	\\Incitation textuelle à ce que l'utilisateur clique sur le cookie

	\\Animation cookie

	__SI__ l'utlisateur passe la souris sur le cookie 

		Agrandissement du cookie

	__SINON__

		Rien ne se passe

	__FINSI__
	

	__SI__ l'utilisateur clique sur le cookie
		
		\\Fonction multiplicateurClik

		\\Animation cookie

		Agrandissement du cookie au clic

		Affichage animation +nbr de cookie gagné

		Affichage du nouveau scoreTotal

		Ajout de +nbr de cookie gagné au scoreTotal

	__SINON__

		__SI__ l'utilisateur à un bonus par seconde actif
			
			ajout de bonus par seconde au scoreTotal
		__FINSI__
		
		rien ne se passe jusqu'au prochain clic

		rien ne se passe sans achat de bonus par seconde
	__FINSI__

	\\Fonction multiplicateurTombe

	__SI__ l'utilisateur à un ou plusieurs bonus actif

		incrément automatique chaque seconde du scoreTotal

		affichage chaque seconde du nouveau scoreTotal
	
	__SINON__

		rien ne se passe
	__FINSI__

	\\Fonction achat-objet

	\\Animation CSS

	__SI__ l'utilisateur a gagné assez de cookie
		
		surbrillance des objets bonus dans le store
	
	__SINON__
		
		objets restent grisés

	__FINSI__

	__SI__ l'utilisateur clique pour acheter un objet bonus

		Déduction du prix du bonus dans le scoreTotal

		Addition aux eventuels bonus déjà actifs

		Affichage du nombre de bonus achetés/actifs dans le store

		Affichage du nouveau score de multiplicateurTombe
		
		Incrément par seconde au scoreTotal
	
	__SINON__

		rien ne se passe
	
	__FINSI__

	__SI__ l'utilisateur a acheté un bonus
		
		__SI__ l'utilisateur a encore assez de cookies pour acheter un autre

		L'objet reste en surbrillance

		__SINON__ 

		il devient grisé

		__FINSI__
	__FINSI__

		


