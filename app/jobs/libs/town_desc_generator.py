import random

def generate_town_description():
  names1 = ['Based','Built','Cast','Constructed','Designed','Engineered','Erected','Established','Fabricated','Forged','Formed','Found','Located','Positioned','Raised','Rooted','Set','Settled','Situated','Stationed']
  names2 = ['on the Northern side of','on the Southern side of','on the Western side of','on the Eastern side of','on the top of','on top of','on the peak of','on the base of','on the bottom of','on the right side of','on the left side of','on the light side of','on the dark side of','on the highest point of','on the lowest point of','above','behind','under','inside','around','beside','next to','in','on the end of']
  names3 = ['bluff','canal','canyon','cave','cavern','cliff','covert','desert','field','forest','geyser field','glacier','grotto','grove','hill','n island','jungle','lake','lava stream','mound','mountain','n ocean','peninsula','river','sea','stream','thicket','tundra','valley','vulcano','waterfall','wetlands','woodlands']
  names4 = ['village','town','city','metropolis','hamlet','megalopolis','outpost','port','township','settlement','crossroad','burg']
  names6 = ['humans','elves','orcs','dwarves','fairies','trolls','vampires','werewolves','humans','humans','humans','night elves','blood elves','gnomes','goblins','high elves','wood elves','dark elves','halflings','giants','pirates','barbarians','vikings']
  names7 = ['Agent','Baron','Captain','Chief','Colonel','Commander','Director','Duchess','Duke','Earl','General','Governor','Judge','Knight','Lady','Lord','Major','Marshal','Master','Mayor','Minister','Mr.','Mrs.','Ms.','Officer','Ruler','Sergeant','Supervisor','Warlord']
  names8 = ['Adwell','Ady','Afton','Barnett','Barney','Barnfield','Chilson','Chilton','Cawthorn','Davenport','Davey','Dallin','Eustice','Eustis','Evatt','Falcon','Faley','Falkner','Geary','Gedman','Gedney','Hanshaw','Hansley','Hanson','Lamkin','Lamkins','Lamm','Lockridge','Locks','Lockwood','Masser','Massey','Massingale','Rosemond','Shepherd','Shepley','Wakeley','Wakelin']
  names9 = ['magical properties','fertile soils','ancient histories','a cultural history','hidden secrets','healing properties','an abundance of minerals','a dark history','rare resources','precious gems','ancient burial grounds','old tombs','a broken, hidden library','an ancient water source','dark ruins','rare plants','medicinal plants','strong metal ores','natural defences','hidden tunnels','ambush positions','escape routes','an abundance of wildlife','ancient, lost technologies','a comfortable weather system','unique wildlife','spiritual significance','ancestral grounds','ancient, unexplained statues','body enhancing properties']        
  names10 = ['n advancing',' booming',' breaking',' damaged',' declining',' developing',' failing',' feeble',' flourishing',' growing',' healthy',' hurting','n improving',' mending',' poor',' progressing',' prospering',' prosperous',' thriving',' tormented',' troubled','n unhealthy',' wounded']
  names11 = ['alchemy','animal breeding','animal training','armorsmithing','baking','beer brewing','blacksmithing','carpenting','cooking','crafting','engineering','farming','fishing','fletching','herbalism','hunting','jewelcrafting','leatherworking','medicine','mining','tailoring','thieving','trade','war','weaponsmithing','wine brewing','wood production','woodcrafting']
  names14 = ['alchemy','rare animal breeding','rare animal training','advanced armorsmithing','refined baking','elaborate beer brewing techniques','elaborate blacksmithing','refined carpenting','sophisticated cooking','complex crafting','master engineering','rare crop farming','ocean fishing','intricate fletching techniques','rare herbalism','sustainable hunting','intricate jewelcrafting','gorgeous leatherworking','advanced medicine','prosperous mining','delicate tailoring','highly skilled thieving','prosperous trade','skilled in the art of war','weaponsmithing','ancient wine brewing techniques','rare wood production','delicate woodcrafting','a strong defence','skilled fighters','strong magicians','deadly archers']
  names17 = ['gorgeous','beautiful','majestic','elegant','glorious','impressive','flamboyant','luxuriant','stunning','impressive','delightful','graceful','magnificent','imposing','sublime','grandiose','humble','crude','rough','mediocre','dull','plain','ordinary','hideous','gruesome','dreadful','macabre','ghastly','unattractive','unexciting','worn','mundane']
  names18 = ['oak wood','maple wood','yew wood','cypress wood','pine wood','spruce  wood','redwood','ash wood','birch wood','blackwood','ebony wood','elm wood','ironwood','mahogany wood','silky oak wood','willow wood','bamboo','tatchet','shingle','slate tile','wheat straw','seagrass','ceramic tile','copper']
  names19 = ['golden brick','red brick','redstone','granite','marble','limestone','sandstone','stone veneer','chiseled stone','oak wood','maple wood','yew wood','cypress wood','pine wood','spruce  wood','redwood','ash wood','birch wood','blackwood','ebony wood','elm wood','ironwood','mahogany wood','silky oak wood','willow wood','bamboo','tatchet','shingle','slate tile','wheat straw','seagrass','ceramic tile','copper','lavastone']
  names20 = ['lucious gardens','enchanting wildlife','swarms of fireflies','babbling creeks','vibrant, rare trees','breathtaking waterfall','calm and quiet collection of ponds','frozen lakes','frozen waterfall','imposing glacier','ambient light of nearby lava streams','the native bird species','rainbow of different flowers','everclear night sky','huge, majestic geyser','silent mountain range','foggy fields','a gorgeous mirror lake','rows upon rows of lucious trees','staircase of waterfalls','frozen ponds','aromatic flowers','calming ocean front','fields of farmland','bamboo forest','huge oak tree','stunning canyon','majestic fjords','white, sandy beaches','amazing sunsets']
  names21 = ['amusing','captivating','charming','delightful','enchanting','enthralling','entrancing','fascinating','glamorous','heavenly','intriguing','inviting','magical','mystical','mythical','otherworldly','pleasant','pleasing','seductive','whimsical']
  names38 = ['town hall','cathedral','farm','large park','bank','jail','wishing well','old bar','armory','training grounds','graveyard','mausoleum','watchtower','blacksmith','hotel','lighthouse','market','museum','hospital','barracks','power plant','watermill','windmill','library','school','temple','castle','dueling arena','fountain','greenhouse','guard tower','lumber mill','quarry','stables','statue','tombs','monument','ancient forge','inn','cemetery','theatre','stadium','wizard tower']
  names41 = ['affluent','beautiful','bleak','booming','cheerful','comfortable','delightful','enjoyable','flourishing','frightful','gloomy','gracious','grim','grisly','growing','gruesome','harsh','horrendous','horrible','horrific','luxuriant','macabre','pleasant','pleasurable','prosperous','sinister','somber','terrible','terrifying','thriving']
  
  random1 = random.randint(0, len(names1) - 1)
  random2 = random.randint(0, len(names2) - 1)
  random3 = random.randint(0, len(names3) - 1)
  random4 = random.randint(0, len(names4) - 1)
  random6 = random.randint(0, len(names6) - 1)
  random6b = random.randint(0, len(names6) - 1)
  random9 = random.randint(0, len(names9) - 1)
  random10 = random.randint(0, len(names10) - 1)
  random11 = random.randint(0, len(names11) - 1)
  random12 = random.randint(0, len(names11) - 1)

  while random12 == random11:
    random12 = random.randint(0, len(names11) - 1)

  random13 = random.randint(0, len(names11) - 1)

  while random13 == random12 or random13 == random11:
    random13 = random.randint(0, len(names11) - 1)

  random14 = random.randint(0, len(names14) - 1)
  random15 = random.randint(0, len(names14) - 1)

  while random15 == random14:
    random.randint(0, len(names14) - 1)

  random16 = random.randint(0, len(names11) - 1)
  while random16 == random11 or random16 == random12 or random16 == random13:
    random16 = random.randint(0, len(names11) - 1)

  random17 = random.randint(0, len(names17) - 1)

  if random6 == 2:
    names8 = ['Gnarg','Gnarlug','Gnorl','Gnorth','Gnoth','Gnurl','Golag','Golub','Gomatug','Gomoku','Gorgu','Gorlag','Grikug','Grug','Grukag','Grukk','Grung','Gruul']            
  elif random6 == 3:
    names8 = ['Bengahdar','Banbrek','Drumdus','Dulgarn','Galirg','Kharnur','Iromuador','Ragorhdrom','Urmbrek','Theledon']        
  elif random6 == 4:
    names7 = ['Queen','King','Prince','Princess']
    names8 = ['Azore','Coral','Cowrie','Ebbie','Gullie','Ionia','Ivory','Marin','Meer','Meri','Mora','Nautila','Oceana','Pearl','Percula','Sandy','Shelly','Starfish','Tidal','Urchin','Wave','Whirl','Wrassey','Aed','Aodh','Aeden','Ash','Ashley','Blaze','Candala','Coala','Firo','Flare']
  elif random6 == 5:
    names8 = ['Ekon','Erasto','Haijen','Hamedi','Hokima','Jaafan','Jabir','Jalai','Javyn','Jijel','Juma','Jumoke','Kaijin','Kazko','Maalik','Makas','Malak','Nyabingi','Rahjin','Rakash','Rashi','Razi']
  elif random6 == 1 or random6 == 11 or random6 == 12 or random6 == 15 or random6 == 16 or random6 == 17:
    names8 = ['Wyninn','Ninleyn','Tinlef','Elluin','Elduin','Elmon','Almar','Alas','Alwin','Almer','Alre','Alred','Alen','Alluin','Alduin','Almon','Hagmar','Hagas','Hagwin','Hagmer','Hagre']
  elif random6 == 13:
    names8 = ['Glinoflonk','Bonlebick','Bimbik','Gnobflink','Binflonk','Nittlewizz','Gimkink','Merbibus','Totonk','Dinnus']
  elif random6 == 14:
    names8 = ['Karax','Baxeek','Soxart','Rezikmez','Fizink','Wimax','Jexmelyx','Grexmex','Tinkbelex','Greekeels']
  elif random6 == 20:
    names7 = ['Captain']

  if random17 > 16:
    names18 = ['metal shingle','galvanised steel','rusted','decaying','blackened','gray','black wooden','dark wooden','murky wooden','gloomy wooden','half rotten']
    names19 = ['faded granite','faded marble','worn limestone','worn sandstone','stone veneer','chiseled stone','galvanised steel','rusted','decaying','blackened','gray','black wooden','dark wooden','murky wooden','gloomy wooden','half rotten','lavastone']
    names20 = ['decaying trees','rotten fields','broken roads','overgrown gardens','vines overgrowing everything','unmaintained gardens','foggy surroundings','murky woods','musky swamps','menacing mountain tops','barren grounds','absolute silence','a large graveyard','large cobwebs','dusty windows','dirty roads','thick smoke','creaking wood','whistling wind','scary animals','a lot of insects','scavenger birds','ominous scarecrows']
    names21 = ['bizarre','bleak','chilling','creepy','dark','desolate','dreary','dull','eerie','foreboding','frightening','ghostly','ghoulish','gloomy','grim','grisly','gruesome','macabre','morbid','mysterious','ominous','peculiar','repulsive','revolting','sinister','somber','spine-chilling','supernatural','uncanny','unearthly']

  random18 = random.randint(0, len(names18) - 1)
  random20 = random.randint(0, len(names20) - 1)
  random21 = random.randint(0, len(names21) - 1)
  random38 = random.randint(0, len(names38) - 1)
  random39 = random.randint(20, 70)
  random41 = random.randint(0, len(names41) - 1)
  random7 = random.randint(0, len(names7) - 1)
  random8 = random.randint(0, len(names8) - 1)
  random19 = random.randint(0, len(names19) - 1)
    
  name = '%s %s a %s, the %s is home to %s lead by %s %s. ' % (names1[random1], names2[random2], names3[random3], names4[random4], names6[random6], names7[random7], names8[random8])
  name += 'It wasn\'t built by a %s by accident, as it has %s, which is of great importance to the people. ' % (names3[random3], names9[random9])
  name += 'The %s itself looks %s. With its %s rooftops, %s walls, and %s, it has a %s atmosphere.' % (names4[random4], names17[random17], names18[random18], names19[random19], names20[random20], names21[random21])
  # name = name + 'The main attraction is the ' + names38[random38] + ', which was built ' + random39 + ' years ago and designed by ' + names6[random6b] + '.'
  # name = name + names5[random5] + ' has a' + names10[random10] + ' economy, which is mainly supported by ' + names11[random11] + ', ' + names11[random12] + ' and ' + names11[random13] + '. But their biggest strengths are ' + names14[random14] + ' and ' + names14[random15] + '.'
  # name = name + 'However, ' + names5[random5] + ' lacks people skilled in ' + names11[random16] + '.'
  # name = name + 'Despite its strengths and weaknesses, ' + names5[random5] + ' is most likely headed towards a ' + names41[random41] + ' future under the leadership of ' + names7[random7] + ' ' + names8[random8] + '. But this remains to be seen.'
  return name

print(generate_town_description())
