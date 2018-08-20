import random

def generate_planet_name():
    planets = [
    'cen-tau-ri',
    'pro-xi-ma',
    'al-pha',
    'pro-xi-mus',
    'ter-ra',
    'sa-turn',
    'ju-pi-ter',
    'mer-cu-ry',
    've-nus',
    'u-ra-nus',
    'mars',
    'nep-tune',
    'plu-to',
    'ni-bi-ru',
    'tra-pist',
    'zeus',
    'aph-ro-dite',
    'a-res',
    'heph-aes-tus',
    'ty-phoon',
    'da-scher',
    'en-dor',
    'ka-mi-no',
    'qua-sar',
    'no-va',
    'om-ni-sen',
    'dune',
    'a-ra-kis',
    'gla-tius',
    'co-do-mi-ni-um',
    'dor-sai',
    'o-si-mio',
    'he-li-os',
    'leo',
    'hein-lein',
    'a-ca-mar',
    'ach-ra-dy',
    'a-di-ge-on',
    'a-las-tria',
    'al-drea',
    'von-tria',
    'al-di-bran',
    'al-ge-ron',
    'ach-eon',
    'a-lon-dra',
    'cyg-nus',
    'a-ri-done',
    'a-ri-da-ni',
    'lep-tus',
    'am-leth',
    'am-di-vian',
    'om-ri-con',
    'ma-jo-ris',
    'mi-no-ris',
    'leo-nis',
    'an-do-ria',
    'an-go-sia',
    'ar-ge-lius',
    'ar-gus',
    'per-cii',
    'pro-me-thi-us',
    'the-os',
    'ar-ret',
    'ar-va-da',
    'au-re-lia',
    'ba-lon-si',
    'bar-son',
    'ba-ri-di-on',
    'ben-zar',
    'ben-thos',
    'kup-sic',
    'bo-kara',
    'bo-la-rus',
    'bo-ra-dis',
    'bos-lic',
    'bren-ta-lia',
    'bri-toid',
    'he-lia',
    'cal-do-nia',
    'cal-dos',
    'cal-leb',
    'ca-li-os',
    'ca-mus',
    'ca-no-pius',
    'car-da-sia',
    'cas-tal',
    'ca-tu-lia',
    'ce-ti',
    'cor-van',
    'co-ri-dan',
    'cyg-nia',
    'cyg-net',
    'da-ka-ra',
    'da-lan',
    'da-nu-la',
    'oxi-lia',
    'dav-los',
    'de-cos',
    'de-des-tris',
    'cen-tris',
    'cat-los',
    'der-bia',
    'der-mi-nia',
    'de-ni-us',
    'nig-mus',
    'stag-ni-us',
    'spho-li-us',
    'shpo-rio',
    'dre-on',
    'val-les',
    'al-pes',
    'al-pus',
    'xar-ria',
    'cor-do-via',
    'met-ne-ria',
    'cos-ma-dov',
    'ju-ne-ria',
    'del-ta',
    'o-rio-na',
    'ci-ca-da',
    'am-ne-li-um',
    'noe-li-um',
    'au-ra',
    'au-ro-ra',
    'em-bo-ria',
    'phan-tax',
    'ob-lox',
    'ob-li-via',
    'za-thu-ra',
    'ar-chea',
    'cen-tus',
    'ep-si-lon',
    'au-pho-ria',
    'au-ro-ria',
    'ma-ri-dia',
    'po-tel-mia',
    'hy-pho-ria',
    'ti-tan',
    'la-vi-tan',
    'no-mi-cron',
    'mag-nus',
    'kep-lar',
    'del-phi',
    'nim-bus',
    'am-phus',
    'mor-phus',
    'lamb-dus',
    'dus-to-pia',
    'mo-pi-um',
    'mo-li-um',
    'pho-ri-um',
    'pho-ri-oso',
    'oso-li-um',
    'xe-li-um',
    'so-li-sia',
    'so-lus',
    'ap-po-lus',
    'pho-bos',
    'chro-nos',
    'as-tos',
    'seg-mos',
    'co-los',
    'dei-mos',
    'cog-nus',
    'sig-mus',
    'co-ro-li-os',
    'pe-ri-li-os',
    'sep-tus',
    'mes-mus',
    'op-tus',
    'ne-bu-lus',
    'hec-tus',
    'me-gus',
    'gi-gus',
    'te-rus',
    'pe-tus',
    'lu-mus',
    'pri-mus',
    'op-ti-mus',
    'ori-gus',
    'xe-lo-phus',
    'meg-lo-vus',
    'al-pha-ni-us',
    'es-la-var',
    'cel-les-ti-us',
    'stel-le-ra-sus',
    'ra-le-os',
    'pa-go-ya',
    'pul-sar',
    'vinti-mus',
    'chronos',
    'galliphrey',
    'arrakis',
    'skaro',
    'arra-kis',
    'skar-o'
    ]

    total_syllables = 0

    syllables = []

    for p in planets:
        lex = p.split('-')
        total_syllables += len(lex)
        for l in lex:
            if l not in syllables:
                syllables.append(l)

    div_index = len(syllables) / total_syllables
    div_index_str = str(div_index)[:4]

    size = len(syllables) + 1
    freq = [[0] * size for i in range(size)]

    for p in planets:
        lex = p.split('-')
        i = 0
        while i < len(lex) - 1:
            freq[syllables.index(lex[i])][syllables.index(lex[i+1])] += 1
            i += 1
        freq[syllables.index(lex[len(lex) - 1])][size-1] += 1

    planet_name = ''
    suffixes = ['Prime',
                'B',
                'Alpha',
                'Proxima',
                'IV',
                'V',
                'C',
                'VI',
                'VII',
                'VIII',
                'X',
                'IX',
                'D']

    length = random.randint(2, 3)
    initial = random.randint(0, size - 2)
    while length > 0:
        while 1 not in freq[initial]:
            initial = random.randint(0, size - 2)
        planet_name += syllables[initial]
        initial = freq[initial].index(1)
        length -= 1
    suffix_index = random.randint(0, len(suffixes) - 1)
    planet_name = planet_name.strip().title()

    planet_name += ' '
    planet_name += suffixes[suffix_index]

    return planet_name.strip()

