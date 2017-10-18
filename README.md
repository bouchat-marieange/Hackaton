# Hackaton
Hackaton - Cookies

*Pseudocode Cookie-clikeur by Steeve, Marie-Ange, Antoine, Laureen et Syl*

\\Accès au jeu cookie-clikeur via interface web

__DEBUT__
\\Incitation textuelle à ce que l'utilisateur clique sur le cookie

\\Animation cookie

__SI__ l'utlisateur passe la souris sur le cookie 

1. Agrandissement du cookie

__SINON__

1. Rien ne se passe

__FINSI__

__SI__ l'utilisateur clique sur le cookie
		
\\Fonction multiplicateurClik

\\Animation cookie

1. Agrandissement du cookie au clic

2. Affichage animation +nbr de cookie gagné

3. Affichage du nouveau scoreTotal

4. Ajout de +nbr de cookie gagné au scoreTotal

__SINON__

__SI__ l'utilisateur à un bonus par seconde actif
			
1. ajout de bonus par seconde au scoreTotal

__FINSI__
		
1. rien ne se passe jusqu'au prochain clic

2. rien ne se passe sans achat de bonus par seconde

__FINSI__

\\Fonction multiplicateurTombe

__SI__ l'utilisateur à un ou plusieurs bonus actif

1. incrément automatique chaque seconde du scoreTotal

2. affichage chaque seconde du nouveau scoreTotal
	
__SINON__

1. rien ne se passe

__FINSI__

\\Fonction achat-objet

\\Animation CSS

__SI__ l'utilisateur a gagné assez de cookie
		
1. surbrillance des objets bonus dans le store
	
__SINON__
		
1. objets restent grisés

__FINSI__

__SI__ l'utilisateur clique pour acheter un objet bonus

1. Déduction du prix du bonus dans le scoreTotal

2. Addition aux eventuels bonus déjà actifs

3. Affichage du nombre de bonus achetés/actifs dans le store

4. Affichage du nouveau score de multiplicateurTombe
		
5. Incrément par seconde au scoreTotal
	
__SINON__

1. rien ne se passe
	
__FINSI__

__SI__ l'utilisateur a acheté un bonus
		
__SI__ l'utilisateur a encore assez de cookies pour acheter un autre

1. L'objet reste en surbrillance

__SINON__ 

1. il devient grisé

__FINSI__

__FINSI__

		


