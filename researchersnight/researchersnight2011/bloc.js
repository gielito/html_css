function bloc(code) {
	
	
	document.getElementById("bloc").style.backgroundImage = 'url(images/bloc_'+code+'.png)';
	document.getElementById("textbloc").style.overflow = 'auto';
	document.getElementById("textbloc").style.width = '300px';
	document.getElementById("textbloc").style.height = '362px';
	document.getElementById("textbloc").style.position = 'relative';



	if (code=='at') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(0);">FIT</a></li></ul>';
	}


	if (code=='be') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(1);">Brussels</a></li><li><a href="javascript:event(1);">Liège</a></li><li><a href="javascript:event(1);">Louvain la Neuve</a></li></ul>';
	}
	

	if (code=='bg') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(2);">Burgas</a></li><li><a href="javascript:event(2);">Rousse</a></li><li><a href="javascript:event(2);">Sofia</a></li><li><a href="javascript:event(2);">Plovdiv</a></li><li><a href="javascript:event(2);"> Stara Zagora</a></li><li><a href="javascript:event(2);">Varna</a></li></ul>';
	}
	
	
	if (code=='cr') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(3);">Rab</a></li><li><a href="javascript:event(3);"> Slavonski Brod</a></li><li><a href="javascript:event(3);">Varazdin</a></li><li><a href="javascript:event(3);">Zagreb</a></li></ul>';
	}
	
	
	if (code=='cy') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(4);">Nicosia</a></li></ul>';
	}
	
	
	if (code=='cz') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(5);">Brno</a></li><li><a href="javascript:event(5);">České</a></li><li><a href="javascript:event(5);">Budějovice</a></li><li><a href="javascript:event(5);">Dvůr Králové</a></li><li><a href="javascript:event(5);">Hradec Králové</a></li><li><a href="javascript:event(5);">Jihlava Prostějov</a></li><li><a href="javascript:event(5);">Jindřichův Hradec</a></li><li><a href="javascript:event(5);">Liberec</a></li><li><a href="javascript:event(5);">Most</a></li><li><a href="javascript:event(5);">Ondřejov</a></li><li><a href="javascript:event(5);">Ostrava</a></li><li><a href="javascript:event(5);">Pardubice</a></li><li><a href="javascript:event(5);">Pelhřimov</a></li><li><a href="javascript:event(5);">Pilsen</a></li><li><a href="javascript:event(5);">Prague</a></li><li><a href="javascript:event(5);">Rokycany</a></li><li><a href="javascript:event(5);">Sezimovo Ústí</a></li><li><a href="javascript:event(5);">Slaný</a></li><li><a href="javascript:event(5);">Teplice</a></li><li><a href="javascript:event(5);">Úpice</a></li><li><a href="javascript:event(5);">Valašské Meziříčí</a></li><li><a href="javascript:event(5);">Vlašim Žebrák</a></li><li><a href="javascript:event(5);">Zlín</a></li></ul>';
	}
	

		if (code=='ee') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(6);">Narva</a></li><li><a href="javascript:event(6);">Pärnu</a></li><li><a href="javascript:event(6);">Rakvere</a></li><li><a href="javascript:event(6);">Tallinn</a></li><li><a href="javascript:event(6);">Tartu</a></li><li><a href="javascript:event(6);">Valga</a></li><li><a href="javascript:event(6);">Viljandi</a></li><li><a href="javascript:event(6);">three Estonian islands</a></li></ul>';
	}
	
	
		if (code=='fi') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(7);">Helsinki area</a></li><li><a href="javascript:event(7);">Kotka</a></li><li><a href="javascript:event(7);">Lahti</a></li></ul>';
	}
	
	
		if (code=='fr') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(8);">Angers</a></li><li><a href="javascript:event(8);">Besançon</a></li><li><a href="javascript:event(8);">Bordeaux</a></li><li><a href="javascript:event(8);">Brest</a></li><li><a href="javascript:event(8);">Clermont lHérault</a></li><li><a href="javascript:event(8);">Dijon</a></li><li><a href="javascript:event(8);">Le Mans</a></li><li><a href="javascript:event(8);">Marcoule</a></li><li><a href="javascript:event(8);">Montpellier</a></li><li><a href="javascript:event(8);">Mulhouse</a></li><li><a href="javascript:event(8);">Nîmes</a></li><li><a href="javascript:event(8);">Paris and surroundings</a></li><li><a href="javascript:event(8);">Strasbourg</a></li><li><a href="javascript:event(8);">Toulouse</a></li><li><a href="javascript:event(8);">Villeurbanne</a></li></ul>';
	}
	
	
	
	if (code=='mk') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(9);">Bitola</a></li><li><a href="javascript:event(9);">Skopje</a></li></ul>';
	}
	
	
	if (code=='de') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(10);">Hamburg</a>';
	}
	
	
		if (code=='gr') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(11);">Athens</a></li><li><a href="javascript:event(11);">Ioannina</a></li><li><a href="javascript:event(11);">Patras</a></li><li><a href="javascript:event(11);">Volos</a></li></ul>';
	}
	
	
			if (code=='hu') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(121);">Budapest</a></li><li><a href="javascript:event(12);">Miskolctapolca</a></li><li><a href="javascript:event(13);">Baja</a></li><li><a href="javascript:event(13);">Debrecen</a></li><li><a href="javascript:event(13);">Eger</a></li><li><a href="javascript:event(13);">Gödöllö</a></li><li><a href="javascript:event(13);">Györ</a></li><li><a href="javascript:event(13);">Hódmezővásárhely</a></li><li><a href="javascript:event(13);">Martonvásár</a></li><li><a href="javascript:event(13);">Miskolc</a></li><li><a href="javascript:event(13);">Mosonmagyaróvár</a></li><li><a href="javascript:event(13);">Nyíregyháza</a></li><li><a href="javascript:event(13);">Pécs</a></li><li><a href="javascript:event(13);">Sárospatak</a></li><li><a href="javascript:event(13);">Sopron</a></li><li><a href="javascript:event(13);">Szarvas</a></li><li><a href="javascript:event(13);">Szeged</a></li><li><a href="javascript:event(13);">Szombathely</a></li></ul>';
	}
	
	
	
	if (code=='is') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(14);">Akureyricity</a></li><li><a href="javascript:event(14);">East Iceland</a></li><li><a href="javascript:event(14);">Northern Iceland</a></li><li><a href="javascript:event(14);">Reykjavik</a></li><li><a href="javascript:event(14);">South Eastern region</a></li><li><a href="javascript:event(14);">West Iceland</a></li></ul>';
	}
	
	
		if (code=='il') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(15);">Beer-Sheva</a></li><li><a href="javascript:event(15);">Eilat</a></li><li><a href="javascript:event(15);">Haifa</a></li><li><a href="javascript:event(15);">Jerusalem</a></li><li><a href="javascript:event(15);">Karmiel</a></li><li><a href="javascript:event(15);">Kiryat-Yam</a></li><li><a href="javascript:event(15);">Kiryat-Shmona</a></li><li><a href="javascript:event(15);">Raanana</a></li><li><a href="javascript:event(15);">Ramat-Gan</a></li><li><a href="javascript:event(15);">Rehovot</a></li><li><a href="javascript:event(15);">Tel-Aviv</a></li></ul>';
	}
	
	
			if (code=='it') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(19);">Alessandria</a></li><li><a href="javascript:event(22);">Altamura</a></li><li><a href="javascript:event(16);">Asiago</a></li><li><a href="javascript:event(221);">Bari</a></li><li><a href="javascript:event(22);">Barletta</a></li><li><a href="javascript:event(17);">Benevento</a></li><li><a href="javascript:event(19);">Biella</a></li><li><a href="javascript:event(16);">Bologna</a></li><li><a href="javascript:event(22);">Brindisi</a></li><li><a href="javascript:event(16);">Cagliari</a></li><li><a href="javascript:event(22);">Campobasso</a></li><li><a href="javascript:event(22);">Canosa</a></li><li><a href="javascript:event(16);">Catania</a></li><li><a href="javascript:event(1612);">Cosenza</a></li><li><a href="javascript:event(19);">Cuneo</a></li><li><a href="javascript:event(16);">Faenza</a></li><li><a href="javascript:event(16);">Ferrara</a></li><li><a href="javascript:event(22);">Foggia</a></li><li><a href="javascript:event(24);">Frascati area</a></li><li><a href="javascript:event(391);">Gorizia</a></li><li><a href="javascript:event(24);">Grottaferrara</a></li><li><a href="javascript:event(24);">Laquila</a></li><li><a href="javascript:event(22);">Lecce</a></li><li><a href="javascript:event(16);">Lerici</a></li><li><a href="javascript:event(22);">Matera</a></li><li><a href="javascript:event(241);">Napoli</a></li><li><a href="javascript:event(19);">Novara</a></li><li><a href="javascript:event(20);">Padova</a></li><li><a href="javascript:event(17);">Palermo</a></li><li><a href="javascript:event(16);">Pavia</a></li><li><a href="javascript:event(16);">Piacenza</a></li><li><a href="javascript:event(24);">Pisa</a></li><li><a href="javascript:event(22);">Potenza</a></li><li><a href="javascript:event(171);">Roma</a></li><li><a href="javascript:event(16);">Salerno</a></li><li><a href="javascript:event(241);">Teramo</a></li><li><a href="javascript:event(19);">Torino</a></li><li><a href="javascript:event(21);">Trento</a></li><li><a href="javascript:event(18);">Trieste</a></li><li><a href="javascript:event(20);">Venezia</a></li><li><a href="javascript:event(19);">Verbania</a></li><li><a href="javascript:event(19);">Vercelli</a></li><li><a href="javascript:event(201);">Verona</a></li><li><a href="javascript:event(391);">Udine</a></li></ul>';
	}
	
	
		if (code=='lv') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(25);">Daugavpils</a></li><li><a href="javascript:event(25);">Jelgava</a></li><li><a href="javascript:event(25);">Rezekne</a></li><li><a href="javascript:event(25);">Riga</a></li><li><a href="javascript:event(25);">Salaspils</a></li><li><a href="javascript:event(25);">Valmiera</a></li><li><a href="javascript:event(25);">Ventspils</a></li></ul>';
	}
	
	
		if (code=='lt') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(26);">Alytus</a></li><li><a href="javascript:event(26);">Jonava</a></li><li><a href="javascript:event(26);">Joniskėlis</a></li><li><a href="javascript:event(26);">Jurbarkas</a></li><li><a href="javascript:event(26);">Kaunas</a></li><li><a href="javascript:event(26);">Kedainiai</a></li><li><a href="javascript:event(26);">Klaipeda</a></li><li><a href="javascript:event(26);">Kretinga</a></li><li><a href="javascript:event(26);">Lazdijai</a></li><li><a href="javascript:event(26);">Moletai</a></li><li><a href="javascript:event(26);">Panevezys</a></li><li><a href="javascript:event(26);">Raseiniai</a></li><li><a href="javascript:event(26);">Sakiai</a></li><li><a href="javascript:event(26);">Salcininkai</a></li><li><a href="javascript:event(26);">Siauliai</a></li><li><a href="javascript:event(26);">Taurage</a></li><li><a href="javascript:event(26);">Ukmerge</a></li><li><a href="javascript:event(26);">Utena</a></li><li><a href="javascript:event(26);">Vilkaviskis</a></li><li><a href="javascript:event(26);">Vilnius</a></li></ul>';
	}
	
	
	
		if (code=='me') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(27);">Kotor</a></li><a href="javascript:event(27);">Nikšic</a></li><a href="javascript:event(27);">Podgorica</a></li></ul>';
	}
	
	
		if (code=='no') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(28);">Bergen</a></li><li><a href="javascript:event(28);">Gjøvik</a></li><li><a href="javascript:event(28);">Haugesund</a></li><li><a href="javascript:event(28);">Horten</a></li><li><a href="javascript:event(28);">Lillestrom</a></li><li><a href="javascript:event(28);">Oslo</a></li><li><a href="javascript:event(28);">Sandnes</a></li><li><a href="javascript:event(28);">Sogndal</a></li><li><a href="javascript:event(28);">Tromsø</a></li><li><a href="javascript:event(28);">Trondheim</a></li></ul>';
	}
	
	
		if (code=='pl') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(29);">Poznan</a></li><li><a href="javascript:event(30);">Krakow</a></li><li><a href="javascript:event(30);">Nowy Sacz</a></li><li><a href="javascript:event(30);">Niepołomice</a></li><a href="javascript:event(30);">Tarnow</a></li><li><a href="javascript:event(31);">Bieslko Biala</a></li><li><a href="javascript:event(31);">Gliwice</a></li><li><a href="javascript:event(31);">Katowice</a></li><li><a href="javascript:event(31);">Sosnowiec</a></li><li><a href="javascript:event(31);">Rybnik</a></li><li><a href="javascript:event(32);">Elk</a></li><li><a href="javascript:event(32);">Mazury</a></li><li><a href="javascript:event(32);">Olcko</a></li><li><a href="javascript:event(32);">Olsztyn(several venues)</a></li><li><a href="javascript:event(32);">Ostrada (through video conferences)</a></li><li><a href="javascript:event(32);">Warmia</a></li></ul>';
	}

	
		if (code=='pt') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(33);">Alcanena</a></li><li><a href="javascript:event(33);">Amadora</a></li><li><a href="javascript:event(33);">Aveiro</a></li><li><a href="javascript:event(33);">Bragança</a></li><li><a href="javascript:event(33);">Castelo Branco</a></li><li><a href="javascript:event(33);">Coimbra</a></li><li><a href="javascript:event(33);">Convento das Maltezas Estremoz</a></li><li><a href="javascript:event(33);">Constância</a></li><li><a href="javascript:event(33);">Faro</a></li><li><a href="javascript:event(33);">Lagos</a></li><li><a href="javascript:event(33);">Lisboa</a></li><li><a href="javascript:event(33);">Lousal</a></li><li><a href="javascript:event(33);">Madeira</a></li><li><a href="javascript:event(33);">Proença a Nova</a></li><li><a href="javascript:event(33);">Santa Maria da Feira</a></li><li><a href="javascript:event(33);">Tavira</a></li><li><a href="javascript:event(33);">Vila do Conde</a></li><li><a href="javascript:event(331);">Porto</a></li></ul>';
	}
	
	
		if (code=='ro') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(35);">Alba Iulia</a></li><li><a href="javascript:event(35);">Bucharest</a></li><li><a href="javascript:event(35);">Constanta</a></li><li><a href="javascript:event(35);">Hunedoara</a></li><li><a href="javascript:event(35);">Corvinilor</a></li><li><a href="javascript:event(35);">Medias</a></li><li><a href="javascript:event(35);">Oradea</a></li><li><a href="javascript:event(35);">Orsova</a></li><li><a href="javascript:event(35);">Ploiesti</a></li><li><a href="javascript:event(35);">Sf. Gheorghe</a></li><li><a href="javascript:event(35);">Sinaia</a></li><li><a href="javascript:event(35);">Targoviste</a></li><li><a href="javascript:event(35);">Tulcea</a></li><li><a href="javascript:event(35);">Vaslui</a></li></ul>';
	}
	
	
		if (code=='sk') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(36);">Bratislava</a></li><li><a href="javascript:event(36);">Banská Bystrica</a></li><li><a href="javascript:event(36);">Tatranská Lomnica</a></li><li><a href="javascript:event(36);">Košice</a></li></ul>';
	}
	
	
	if (code=='sb') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(371);">Belgrade</a></li><li><a href="javascript:event(38);">Novi Sad</a></li><li><a href="javascript:event(38);">Subotica</a></li><li><a href="javascript:event(38);">Zrenjanin</a></li></ul>';
	}
	
	
	if (code=='si') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(39);">Ljubljana</a></li><li><a href="javascript:event(392);">Maribor</a></li><li><a href="javascript:event(39);">Novo Mesto</a></li><li><a href="javascript:event(391);">Nova Gorica</a></li></ul>';
	}
	
	
		if (code=='es') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(40);">Burgos</a></li><li><a href="javascript:event(40);">Girona</a></li><li><a href="javascript:event(40);">Las Palmas de Gran Canaria</a></li><li><a href="javascript:event(40);">León</a></li><li><a href="javascript:event(40);">Oviedo</a></li><li><a href="javascript:event(400);">Madrid</a></li><li><a href="javascript:event(40);">Murcia</a></li><li><a href="javascript:event(40);">Oviedo</a></li><li><a href="javascript:event(40);">Palma de Mallorca</a></li><li><a href="javascript:event(40);">Salamanca</a></li><li><a href="javascript:event(40);">Valladolid</a></li><li><a href="javascript:event(41);">Zaragoza</a></li</ul>';
	}
	
	
	
	if (code=='se') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(42);">Karlstad</a></li><li><a href="javascript:event(42);">Kalmar and Kronoberg counties (Alvesta, Kalmar, Ljungby, Oskarshamn, Tingsryd, Vimmerby, Västervik, Växjö, Älmhult, Öland)</a></li><li><a href="javascript:event(42);">Karlshamn</a></li><li><a href="javascript:event(42);">Lidköping</a></li><li><a href="javascript:event(42);">Luleå</a></li><li><a href="javascript:event(42);">Örebro</a></li><li><a href="javascript:event(42);">Skellefteå</a></li><li><a href="javascript:event(42);">Stenstorp (Stenstorp, Falköping)</a></li><li><a href="javascript:event(42);">Stenungsund</a></li><li><a href="javascript:event(42);">Stockholm</a></li><li><a href="javascript:event(42);">Trollhättan</a></li><li><a href="javascript:event(42);">Umeå</a></li><li><a href="javascript:event(42);">Uppsala</a></li><li><a href="javascript:event(42);">Västerås</a></li></ul>';
	}
	
	
		if (code=='ch') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(43);">Bern</a></li></ul>';
	}
	
	
		if (code=='nl') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(44);">Amsterdam</a></li><li><a href="javascript:event(44);">Nijmegen</a></li></ul>';
	}
	
	    if (code=='tr') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(45);">Istbanbul</a></li></ul>';
	}
	
	
		if (code=='gb') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(47);">Huddersfield</a></li><li><a href="javascript:event(48);">Reading</a></li><li><a href="javascript:event(461);">London</a></li></ul>';
	}
	
	
		if (code=='ie') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(50);">Galway</a></li></ul>';
	}
	
	
	/*
	
	
	
	if (code=='lu') {
		document.getElementById("textbloc").innerHTML = '<b>EU funded events</b><ul><li><a href="javascript:event(50);">No events this year</a></li></ul>';
	}
	


	if (code=='dk') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><a href="javascript:event(51);">No events this year</a></li></ul>';
	}


	if (code=='mt') {
		document.getElementById("textbloc").innerHTML = '		<b>EU funded events</b>		<ul><li><a href="javascript:event(52);">No events this year</a></li></ul>';
	}

*/

	

	
}