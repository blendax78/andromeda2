import random

def random_number_from_list(list):
  return random.randint(0, len(list) - 1)

def generate_dungeon_description():
  nm1 = ['A grand','A large','A massive','A minor','A modest','A narrow','A short','A small','A tall','A wide'];
  nm2 = ['overgrown boulder','granite door','pair of granite doors','broken statue','worn statue','pair of worn statues','boulder','dark cave','murky cave','fallen tree','waterfall','crypt','broken temple','fallen temple','graveyard','fallen tower'];
  nm3 = ['bog','boulder field','cliff side','forest','grove','marsh','morass','mountain base','mountain range','mountain top','snowland','swamp','thicket','wasteland','woodlands','woods'];
  nm20 = ['bleak','dark','dire','eerie','foggy','gloomy','grim','misty','murky','overcast','shadowy','shady','sinister','somber'];

  rnd1 = random_number_from_list(nm1)
  rnd2 = random_number_from_list(nm2)
  rnd3 = random_number_from_list(nm3)
  rnd20 = random_number_from_list(nm20)
  
  desc =  '%s %s in a %s %s marks the entrance to a dungeon.' % (nm1[rnd1],nm2[rnd2],nm20[rnd20],nm3[rnd3])

  return desc

def generate_dungeon_name():
  nm1 = ['Abandoned',
   'Abominable',
   'Abomination',
   'Abysmal',
   'Abyss',
   'Adamantine',
   'Adamantite',
   'Ancient',
   'Angry',
   'Arcane',
   'Arching',
   'Arctic',
   'Arid',
   'Bare',
   'Bellowing',
   'Black',
   'Black Forest',
   'Black Mountain',
   'Bleak',
   'Bloodfall',
   'Bloodlust',
   'Boiling',
   'Bottomless',
   'Brilliant',
   'Broken Bones',
   'Broken Curse',
   'Bronze',
   'Brutal',
   'Buried',
   'Burned',
   'Burning',
   'Burning Forest',
   'Buried',
   'Chaos',
   'Chaotic',
   'Cobalt',
   'Cold',
   'Collapsing',
   'Coral',
   'Courage',
   'Crescent Moon',
   'Crystal',
   'Cunning',
   'Cursed',
   'Damned',
   'Dancing',
   'Dark',
   'Daydream',
   'Dead',
   'Deadly',
   'Death Talon',
   'Decayed',
   'Decaying',
   'Deep',
   'Deepest',
   'Deepwood',
   'Delusion',
   'Demonic',
   'Depraved',
   'Desert',
   'Deserted',
   'Desolate',
   'Desolated',
   'Destroyed',
   'Destruction',
   'Diamond',
   'Dire',
   'Distant',
   'Dragon',
   'Dragonclaw',
   'Dragontooth',
   'Dread',
   'Dreaded',
   'Dreadful',
   'Dream',
   'Dreary',
   'Dry',
   'Dying',
   'Earth',
   'Eastern',
   'Eclipse',
   'Emerald',
   'Empty',
   'Enchanted',
   'Ender',
   'Erased',
   'Eternal',
   'Eternal Agony',
   'Eternal Rest',
   'Ethereal',
   'Fabled',
   'Fallen Legion',
   'False',
   'Feared',
   'Fearsome',
   'Fire',
   'Fire Mountain',
   'Flowing',
   'Foaming',
   'Forbidden',
   'Forgotten',
   'Forsaken',
   'Fractured',
   'Frozen',
   'Full Moon',
   'Ghost',
   'Glistening',
   'Gloomy',
   'Glowing',
   'Goblin',
   'Gold Mine',
   'Grey',
   'Grim',
   'Grizzly',
   'Hallucination',
   'Haunted',
   'Hidden',
   'Hollow',
   'Howling',
   'Hungry',
   'Illusion',
   'Infernal',
   'Infinite',
   'Invisible',
   'Iron',
   'Iron Mine',
   'Ironbark',
   'Isolated',
   'Jade',
   'Jagged',
   'Killing',
   'Laughing',
   'Laughing Skulls',
   'Lifeless',
   'Light',
   'Lion Tooth',
   'Living',
   'Living Dead',
   'Lonely',
   'Lost',
   'Lower',
   'Lucent',
   'Lurking Shadow',
   'Malicious',
   'Mesmerizing',
   'Mighty',
   'Mirage',
   'Mirrored',
   'Misty',
   'Mithril',
   'Mithril Mine',
   'Moaning',
   'Mocking',
   'Molten',
   'Motionless',
   'Mourning',
   'Murky',
   'Mysterious',
   'Mystic',
   'Narrow',
   'Nether',
   'Neverending',
   'Nightmare',
   'Northern',
   'Obliterated',
   'Oblivion',
   'Ogre',
   'Oracle',
   'Orc',
   'Overhanging',
   'Perfumed',
   'Phantom',
   'Phoenix',
   'Prisoner',
   'Quiet',
   'Raging',
   'Red',
   'Restless',
   'Roaring',
   'Rocking',
   'Rugged',
   'Sad',
   'Sanguine',
   'Savage',
   'Scarlet',
   'Scheming',
   'Scorching',
   'Screaming',
   'Secret',
   'Serene',
   'Shadow',
   'Shadowed',
   'Shadowy',
   'Shimmering',
   'Shrieking',
   'Silent',
   'Silver',
   'Sleeping',
   'Smoky',
   'Smoldering',
   'Sorrow',
   'Southern',
   'Specter',
   'Spirit',
   'Steel',
   'Sterile',
   'Sunken',
   'Swamp',
   'Terraced',
   'Thief',
   'Thundering',
   'Tormented',
   'Tranquil',
   'Turbulent',
   'Twilight',
   'Twisted',
   'Twisting',
   'Unholy',
   'Unknown',
   'Unstable',
   'Vicious',
   'Violent',
   'Voiceless',
   'Voiceless Whimpers',
   'Volcanic',
   'Wailing',
   'Wasted',
   'Watching Eyes',
   'Western',
   'Whispering',
   'Whispering Shadows',
   'White',
   'White Forest',
   'Wicked',
   'Wild',
   'Wind',
   'Windy',
   'Winter',
   'Withered',
   'Wondering',
   'Wraith',
   'Wrath',
   'Yawning']
  
  nm2 = ['Burrows',
   'Catacombs',
   'Caverns',
   'Cells',
   'Chambers',
   'Crypt',
   'Delves',
   'Dungeon',
   'Grotto',
   'Haunt',
   'Keep',
   'Labyrinth',
   'Lair',
   'Maze',
   'Mines',
   'Pits',
   'Point',
   'Quarters',
   'Temple',
   'Tombs',
   'Tunnels',
   'Vault']
  
  nm3 = ['Black',
   'White',
   'Silver',
   'Golden',
   'Crystal',
   'Fallen',
   'Ghost',
   'Phantom',
   'Hidden',
   'Secret',
   'Hopeless',
   'Forsaken',
   'Gentle',
   'Chaotic',
   'Conquered',
   'Burning',
   'Poisoned',
   'Whispering',
   'Mourning',
   'Crying',
   'Lost',
   'Infernal',
   'Vanished',
   'Rejected',
   'Neglected',
   'Shunned',
   'Impostor',
   'Renegade',
   'Betrayed',
   'Vanquished',
   'Burning',
   'Frozen',
   'Destroyed',
   'Cursed',
   'Ancient',
   'Obsidian',
   'Ebon',
   'Forbidden',
   'Lonely',
   'Nameless',
   'Dark',
   'Cold',
   'Haunted',
   'Forgotten',
   'Scarlet',
   'Shrouded',
   'Uncanny',
   'Unspoken',
   'Vanishing',
   'Nightmare',
   'Mystic',
   'Mythic',
   'Enigmatic',
   'Doomed',
   'Death\'s',
   'Spirit',
   'Spirit\'s',
   'Unknown',
   'Shadow',
   'Elemental',
   'Savage',
   'Storm',
   'Thunder',
   'Barbaric',
   'Cruel',
   'Brutal',
   'Blooded',
   'Ruthless',
   'Raging',
   'Furious',
   'Mad',
   'Granite',
   'Dishonored',
   'Perished']
  
  nm4 = ['Arachnid',
   'Army',
   'Basilisk',
   'Bat',
   'Bear',
   'Chaos',
   'Cult',
   'Desert',
   'Dragon',
   'Eagle',
   'Elf',
   'Emperor',
   'Forest',
   'Giant',
   'Goblin',
   'Guardian',
   'Horsemen',
   'Hound',
   'Hunter',
   'Jungle',
   'King',
   'Knight',
   'Legion',
   'Leopard',
   'Lion',
   'Mage',
   'Marsh',
   'Monk',
   'Morass',
   'Mountain',
   'Occult',
   'Ogre',
   'Ophidian',
   'Oracle',
   'Orc',
   'Paladin',
   'Panther',
   'Phoenix',
   'Priest',
   'Queen',
   'Raven',
   'Scorpion',
   'Serpent',
   'Soldier',
   'Spider',
   'Swamp',
   'Terathan',
   'Tiger',
   'Warrior',
   'Walker',
   'Widow',
   'Wight',
   'Witch',
   'Wizard',
   'Warlord',
   'Wolf']


  name = ''
  i = random.randint(1,15)
  rnd2 = random_number_from_list(nm2)
  if i <= 5:
    rnd3 = random_number_from_list(nm3)
    rnd4 = random_number_from_list(nm4)
    name = '%s of the %s %s' % (nm2[rnd2], nm3[rnd3], nm4[rnd4])
  elif i <= 10:
    rnd = random_number_from_list(nm1)
    name = 'The %s %s' % (nm1[rnd], nm2[rnd2])
  else:
    rnd = random_number_from_list(nm4)
    name = '%s %s' % (nm4[rnd2], nm2[rnd2])

  return name


