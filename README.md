# **Introducció**

El joc que programarem a la pràctica és  una sopa de lletres (**Word Search**).

El joc estarà format per dues aplicacions. 

1. **Aplicació de l’administrador per gestionar les sopes de lletres**. Mitjançant ella l’administrador del lloc web gestionarà els **usuaris (baixa i consulta), gestionar les sopes de lletres** (alta, baixa i consulta de sopes de lletres).   
   Totes les sopes de lletres estaran a una taula de **10x10 i contindran 10 paraules**. A cada sopa de lletres se li assignarà un nivell de dificultat (baix, mitjà, alt). Aquest nivell anirà en funció de si és menys o més bona de resoldre.  
   També podrà consultar:  
- **Quins són els resultats** que han obtingut els usuaris per a cada sopa de lletra. Quins l’han acabada satisfactòriament i quins no.   
- **Quins són els usuaris que han obtingut millor puntuació.** 

En principi es considerarà que l’usuari ha acabat satisfactòriament la sopa de lletres si troba totes les paraules que conté la sopa de lletres amb menys d’**un minut i sense cap error.**

2. **Aplicació jugador:** el jugador triarà quina sopa de lletres vol resoldre d’entre les que encara no ha resolt.     
   Ell ha d’intentar resoldre la sopa de lletres amb menys d’un minut i sense errors.  
   Li apareixerà la sopa de lletres i el llistat de paraules i ell haurà d’anar clicant a les caselles de la sopa de lletres on creu que hi ha les paraules. Si clica a una casella que està ocupada per una paraula , aquesta casella es marcarà en **verd.** Però si clica a una casella que no hi ha cap lletra de cap paraula, aquesta es marcarà en **vermell**.   
   Si resol correctament la sopa de lletres (aconsegueix amb menys d’un minut marcar totes les caselles on hi ha les lletres de les paraules i no s’equivoca cap vegada, no obté cap casella vermella), obtindrà **(60-x) punts,** on x és el nombre de segons en que s’ha torbat a resoldre la sopa de lletres. Ell anirà acumulant punts (el resultat d’una sopa de lletres s’acumularà a tots els anteriors).   
   Sinó resol la sopa de lletres obtindrà **0 punts.**   
   El jugador podrà consultar quants de punts té actualment.   
   El jugador també podrà donar-se **d’alta com usuari del portal**, així es registraran els resultats de les seves partides.   
   **Si juga dins l’anonimat**, no ha fet login, no es guardaran els resultats. Llavors, el jugador pot jugar sense haver fet login, simplement que no se li guardaran ni els resultats, ni les sopes de lletres que ha fet …

# **HTML**

La primera fase que heu d'entregar és l'HTML de la pràctica.

S’ha d’entregar el codi HTML que correspon a les pantalles de l’aplicació administrador i jugador. 

## Aplicació Administrador

La **pàgina inicial** d’aquesta aplicació s’ha d’anomenar admin\_wordSearch.html 

Aquesta primera pàgina contindrà: 

- El formulari per a que l’usuari pugui fer el login.   
- Peu de pàgina: Enllaç al teu instagram, al teu facebook, al teu twitter. La teva adreça de correu. Comú a totes les pàgines de l’administrador. 

**Pàgina baixa d’usuaris**

Aquesta pàgina contidrà: 

- El menú per accedir a totes les pàgines.   
- Una llista desplegable per a que l’administrador pugui seleccionar quin usuari vol donar de baixa i un botó de baixa.   
- Peu de pàgina.

**Pàgina consulta usuaris:** 

- Un menú per accedir a totes les pàgines (comú a totes les pàgines de l’administrador i logout).  
- Una llista ordenada amb subllistes. Han de sortir els usuaris i per a cada usuari el nom i la contrasenya.   
- Peu de pàgina. 

**Pàgina alta sopa de lletres:**

Contingut de la pàgina: 

- El menú per accedir a totes les pàgines.  
- Caixa per introduir el nom que assignaràs a la sopa de lletres.  
- Radio buttons per seleccionar el nivell de dificultat.   
- 10 caixes de text per introduir les 10 paraules  
- Les lletres de l’abecedari. Un botó per a cada lletra, per a que l’administrador pugui triar la lletra que vol col·locar dins de la casella de la taula  
- Una taula de 10x10 on l’administrador col·locarà les 10 paraules.  
- Un botó per Emplenar automàticament. Aquest botó servirà per a que l’aplicació acabi d’emplenar la taula de la sopa de lletres una vegada l’administrador ha emplenat les paraules a la taula.  
- Botó de reset i botó de desar.   
- Peu de pàgina.

**Pàgina baixa sopa de lletres:**

Contingut de la pàgina: 

- Menú per accedir a totes les pàgines.   
- Ha de sortir un conjunt de check boxs per poder seleccionar quines sopes de lletres vols eliminar.   
- Botó d’eliminar.   
- Peu de pàgina. 

**Pàgina consulta de sopes de lletres:**

Contingut de la pàgina: 

- Menú per accedir a totes les pàgines.  
- Ha de sortir una llista desplegable per a que puguis seleccionar quina sopa vols.   
- Botó consultar.   
- Taula que mostrarà la sopa de lletres  
- LLista no ordenada amb les paraules que conté la sopa de lletres.  
- Peu de pàgina

**Pàgina consulta de resultats sopes de lletres:**

- Menú per accedir a totes les pàgines.   
- Per a cada sopa de lletra: una taula amb els usuaris i la puntuació.  
- Peu de pàgina

**Pàgina consulta de millor resultats:**

- Menú per accedir a totes les pàgines.   
- Llista ordenada de quins son els 3 millors usuaris amb la seva puntuació.  
- Peu de pàgina

**Pàgina d’ajuda:** 

Contingut de la pàgina:

- Menú per accedir a totes les pàgines.  
- De moment han de ser una sèrie de paràgrafs generats amb el Loren Ipsum.  
- Un video (ara un video qualsevol del youtube). Més endavant un video fet teu explicant com funciona l’aplicació administrador i penjat al youtube. Reproducció automàtica i control visible  
- Peu de pàgina. 

## Aplicació jugador

La **pàgina inicial(Toni)** d’aquesta aplicació s’ha d’anomenar wordSearch.html 

Aquesta primera pàgina contindrà: 

- Un menú per accedir a totes les pàgines i logout (comú a totes les pàgines de l’administrador). I un menú secundari per accedir a les 3 pàgines dels jugadors que han obtingut més puntuació. Estan explicades més avall. En aquest punt d’aquí del projecte els menús seran llistes i subllistes.  
- El formulari per a que l’usuari pugui fer el login.   
- Una secció article que tindran accés a dos articles. Aquests dos articles han de ser dues notícies sobre l’aplicació amb un enllaç a una pàgina externa amb més informació.  
- Peu de pàgina: Enllaç al teu instagram, al teu facebook, al teu twitter. La teva adreça de correu. Comú a totes les pàgines de l’administrador. 

**Pàgina alta usuari:(Josep)**

- Menú primari i secundari definit més amunt (inici descripció pantalles aplicació jugador).  
- Una taula per a que l’usuari pugui donar-se d’alta. nom usuari, contrasenya, nom, llinatges, correu electrònic, data naixement.   
- Peu de pàgina

**Pàgina del joc:(Toni)**

Contingut de la pàgina:

- Menú primari i secundari definit més amunt (inici descripció pantalles aplicació jugador).  
- Llista desplegable amb que mostrarà les sopes de lletres \+ nivell de dificultat. Sols mostrarà les que encara li queden per resoldre.   
- Botó de juga.  
- Llista no ordenada de les paraules que conté la sopa de lletra seleccionada.   
- Taula de 10x10 amb la sopa de lletres.  
- Botó Finalitzar (quan cliquin a aquest botó l’aplicació comprovarà si l’usuari ha encertat la sopa de lletres).  
- Caixa de text que informa del temps.   
- Caixa de text que informa del resultat.   
- Peu de pàgina.  

**Pàgina de consulta de punts:(Josep)** 

- Menú primari i secundari definit més amunt (inici descripció pantalles aplicació jugador).  
- Apareixerà una llista ordenada amb el nom de la sopa de lletres i els punts obtinguts per aquell usuari a la sopa de lletres  
- Peu de pàgina. 

**Pàgina d’ajuda:(Toni)** 

Contingut de la pàgina:

- Menú primari i secundari definit més amunt (inici descripció pantalles aplicació jugador).  
- De moment han de ser una sèrie de paràgrafs generats amb el Loren Ipsum.  
- Un video (ara un video qualsevol del youtube). Més endavant un video fet teu explicant com funciona l’aplicació i penjat al youtube. Controls visibles i reproducció automàtica.  
- Peu de pàgina. 

### **Mapa (Josep)**

Contingut de la pàgina:

- Menú primari i secundari definit més amunt (inici descripció pantalles aplicació jugador).  
- En aquest apartat tindrem un mapa amb les ubicacions dels usuaris que hagin jugat al nostre joc. En aquesta primera fase **únicament** pintarem un mapa de Google Maps amb la ubicació de l'institut centrada.  
- Peu de pàgina. 

### **Contacte (Toni)**

Contingut de la pàgina:

- Menú primari i secundari definit més amunt (inici descripció pantalles aplicació jugador).  
- La pàgina de contacte està pensada perquè els usuaris que visitin la vostra pàgina web puguin enviar-vos missatges a través d'un formulari de contacte. Recordeu que en aquesta fase NOMÉS implementem el contingut, no com es veurà finalment.  
- Peu de pàgina.  
- Camps del formulari:   
* **name**: nom de l'usuari. (obligatori)  
* **email**: correu de l'usuari. (obligatori)  
* **type**: només admet els valors: CONSULTA, ERROR, MILLORA, SUBSCRIBE (obligatori)  
* **phone**: telèfon de l'usuari (obligatori)  
* **birthday**: data de naixement de l'usuari (no obligatori)  
* **message**: missatge que ens vulgui escriure l'usuari (obligatori)

### **Configuració (Josep)**

Contingut de la pàgina:

- Menú primari i secundari definit més amunt (inici descripció pantalles aplicació jugador).  
- La pàgina de configuració serà un apartat on el jugador triarà les opcions del joc. Podeu fer que de moment es pugui seleccionar: idioma de la web (català, castellà), colors de les taules de les sopes de lletres, color dels botons.   
- El peu de pàgina.

### **Altra (Toni)**

Contingut de la pàgina:

- Menú primari i secundari definit més amunt (inici descripció pantalles aplicació jugador).  
- Una pàgina extra allà on podeu fer el que vulgueu. L'única norma serà que ha d'utilitzar algun plugin extern. Com que això ho veurem a Javascript, de moment, **ho deixem en blanc**.  
- En aquesta pàgina posau tres fotos. De moment posau tres fotos qualsevols. Hem d’imaginar que seran les fotos dels 3 jugadors amb més puntuació. Quan cliquin a cada una d’elles ha d’anar a la pàgina web del jugador. A aquesta pàgina web del jugador no l’heu de fer vosaltres. Heu d’imaginar que va a una pàgina web ja feta.    
- Peu de pàgina. 

### **Usuari 1 amb més puntuació, usuari 2 amb més puntuació, usuari3 amb més puntuació (Josep)**

Són tres pàgines que seran accesibles des del menú secundari de l’aplicació de l’usuari (no de l’admin).  
Aquestes 3 pàgines seran iguals tindran la mateixa estructura però distint contingut.   
Ara de moment el contingut ha de ser generat per loren ipsum. 

### **Contingut de cada pàgina:** 

- Menú primari i secundari definit més amunt (inici descripció pantalles aplicació jugador).  
- La pàgina ha de tenir: secció dades personals, secció biografia, secció trajectòria professional.   
- Peu de pàgina.

A tenir en compte al codi HTML: 

- Cada pàgina web ha d’estar feta amb HTML5

- Les pàgines han d’estar validades pel w3c.

- Els menús millor si estan estructurats en submenús. 

- Les pàgines han de contenir els elements essencials explicats a classe: metadades …

- Utilitzar favicons. 

- Utilitzar emojis. 

- Hi ha d’haver comentaris que ajudin a la comprensió de la pàgina. 

- És important que el codi estigui ben estructurat, identitat …

- Hi ha d’haver imatges. 

- L’estructura de carpetes explicades a classe (videos, imatges, …).

- Els formularis han de tenir l’opció d’autocompletar sempre que sigui possible.

- Tots els formularis han d’estar validats per un processar\_info.php (per tal de poder comprovar que els valors es passen correctament).

- El mètode d'enviament dels formularis serà POST.

- Només fer l’HTML, no emprar CSS, Javascripts …

- Ara mateix tot serà estàtic (no funcionarà res). Més endavant quan facem la part de Javascript serà quan realment implementarem el joc. 

- No hi ha d’haver disseny. Més endavant quan facem la part de CSS incorporarem el disseny. 

- Cada una de les pàgines ha de comptar com a mínim amb un header, un nav, un main i un footer. Si voleu pot tenir més elements. 

- El *header*, el *nav* i el *footer* han de ser iguals per a les 6 pàgines. Al *header* hi ha d'haver el títol de la vostra pàgina web

- Recordeu a realitzar les pàgines seguint les pautes de bona programació que us han ensenyat a classe (tabulacions, nomenclatures...) i la guia d’estil del w3school.com