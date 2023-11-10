# MuistioApp / Muistiinpano -sovellus

  Ennen sovelluksen käyttöä ja testausta, käyttäjän tulee suorittaa terminaalissa seuraavat komennot:
  - npm install
  - npx expo start

 Sovellusta on tarkoitus käyttää muistiinpanojen luomiseen. 
 Sovellus käyttää Firebaseen luotua tietokantaa, sovelluksella tehtyjen muistiinpanojen tallentamiseen.
 Firebase API sisältyy sovelluksen koodiin, eikä sitä tarvitse erikseen asettaa toimintaan.

 Käyttäjä voi luoda uuden muistiinpanon painamalla "Add Note" -näppäintä. Näppäimen painamisen jälkeen käyttäjä syöttää muistiinpanolle halutun otsikon "Title" -kenttään 
 ja kirjoittaa sitten alempaan kenttään haluamansa sisällön. Tämän jälkeen painetaan "Add" -näppäintä, ohjelma tallentaa muistiinpanon ja palaa takaisin etusivulle.

 Käyttäjä voi myös muuttaa olemassa olevia muistiinpanoja sekä poistaa muistiinpanoja valitsemalla ensin haluamansa muistiinpanon painamalla olemassa olevaa muistiinpanoa.
 Tämän jälkeen aukeaa uusi ikkuna, jossa käyttäjä voi muuttaa muistiinpanon sisältöä haluamakseen ja tallettaa muutokset painamalla "Update" -näppäintä. Samasta valikosta
 käyttäjä voi myös halutessaan poistaa valitun muistiinpanon painamalla "Delete" -näppäintä.

Idea tämän sovelluksen tekemiseen tuli kurssin aikana tehdystä pienestä chat-sovelluksesta.
