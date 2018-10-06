// Imports for express
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

// Imports for ApolloServer
import { ApolloServer } from 'apollo-server-express'
import models from './models'
import schema from './schema'
import resolvers from './resolvers'

// Imports for Mongo
import User from './mongo_models/UserSchema'
import db from './utils/DBConnector'

// MongoDB Import
import Server from './mongo_models/ServerSchema'

const app = express()
app.use(cors())
app.use(morgan('combined'))
console.log(db.readyState)

app.get('/createServers', (req, res) => {
  generateServers()
})

app.get('/dbtest/:id', (req, res) => {
  console.log(`Going to look for a user with id ${req.params.id}`)
  User.find({ 'id': req.params.id }, (err, docs) => {
    if (err) console.log(err)
    res.send(docs)
  })
})

app.get('/dbtest/1337/1', (req, res) => {
  var thisUser = new User({ id: '1' })
  thisUser.save(err => {
    console.log(err)
  })
})

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: models.users[1]
  }
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 8080 }, () => {
  console.log('Apollo Server on http://localhost:8080/graphql')
})

var servers = [
  'Aegwynn',
  'AeriePeak',
  'Agamaggan',
  'Aggramar',
  'Akama',
  'Alexstrasza',
  'Alleria',
  'AltarofStorms',
  'AlteracMountains',
  'AmanThul',
  'Andorhal',
  'Anetheron',
  'Antonidas',
  'Anubarak',
  'Anvilmar',
  'Arathor',
  'Archimonde',
  'Area52',
  'ArgentDawn',
  'Arthas',
  'Arygos',
  'Auchindoun',
  'Azgalor',
  'AzjolNerub',
  'Azralon',
  'Azshara',
  'Azuremyst',
  'Baelgun',
  'Balnazzar',
  'Barthilas',
  'BlackDragonflight',
  'Blackhand',
  'Blackrock',
  'BlackwaterRaiders',
  'BlackwingLair',
  'BladesEdge',
  'Bladefist',
  'BleedingHollow',
  'BloodFurnace',
  'Bloodhoof',
  'Bloodscalp',
  'Bonechewer',
  'BoreanTundra',
  'Boulderfist',
  'Bronzebeard',
  'BurningBlade',
  'BurningLegion',
  'Caelestrasz',
  'Cairne',
  'CenarionCircle',
  'Cenarius',
  'Chogall',
  'Chromaggus',
  'Coilfang',
  'Crushridge',
  'Daggerspine',
  'Dalaran',
  'Dalvengyr',
  'DarkIron',
  'Darkspear',
  'Darrowmere',
  'DathRemar',
  'Dawnbringer',
  'Deathwing',
  'DemonSoul',
  'Dentarg',
  'Destromath',
  'Dethecus',
  'Detheroc',
  'Doomhammer',
  'Draenor',
  'Dragonblight',
  'Dragonmaw',
  'DrakTharon',
  'Drakthul',
  'Draka',
  'Drakkari',
  'Dreadmaul',
  'Drenden',
  'Dunemaul',
  'Durotan',
  'Duskwood',
  'EarthenRing',
  'EchoIsles',
  'Eitrigg',
  'EldreThalas',
  'Elune',
  'EmeraldDream',
  'Eonar',
  'Eredar',
  'Executus',
  'Exodar',
  'Farstriders',
  'Feathermoon',
  'Fenris',
  'Firetree',
  'Fizzcrank',
  'Frostmane',
  'Frostmourne',
  'Frostwolf',
  'Galakrond',
  'Gallywix',
  'Garithos',
  'Garona',
  'Garrosh',
  'Ghostlands',
  'Gilneas',
  'Gnomeregan',
  'Goldrinn',
  'Gorefiend',
  'Gorgonnash',
  'Greymane',
  'GrizzlyHills',
  'Guldan',
  'Gundrak',
  'Gurubashi',
  'Hakkar',
  'Haomarush',
  'Hellscream',
  'Hydraxis',
  'Hyjal',
  'Icecrown',
  'Illidan',
  'Jaedenar',
  'JubeiThos',
  'Kaelthas',
  'Kalecgos',
  'Kargath',
  'KelThuzad',
  'Khadgar',
  'KhazModan',
  'Khazgoroth',
  'Kiljaeden',
  'Kilrogg',
  'KirinTor',
  'Korgath',
  'Korialstrasz',
  'KulTiras',
  'LaughingSkull',
  'Lethon',
  'Lightbringer',
  'LightningsBlade',
  'Lightninghoof',
  'Llane',
  'Lothar',
  'Madoran',
  'Maelstrom',
  'Magtheridon',
  'Maiev',
  'MalGanis',
  'Malfurion',
  'Malorne',
  'Malygos',
  'Mannoroth',
  'Medivh',
  'Misha',
  'MokNathal',
  'MoonGuard',
  'Moonrunner',
  'Mugthol',
  'Muradin',
  'Nagrand',
  'Nathrezim',
  'Nazgrel',
  'Nazjatar',
  'Nemesis',
  'Nerzhul',
  'Nesingwary',
  'Nordrassil',
  'Norgannon',
  'Onyxia',
  'Perenolde',
  'Proudmoore',
  'QuelThalas',
  'Queldorei',
  'Ragnaros',
  'Ravencrest',
  'Ravenholdt',
  'Rexxar',
  'Rivendare',
  'Runetotem',
  'Sargeras',
  'Saurfang',
  'ScarletCrusade',
  'Scilla',
  'Senjin',
  'Sentinels',
  'ShadowCouncil',
  'Shadowmoon',
  'Shadowsong',
  'Shandris',
  'ShatteredHalls',
  'ShatteredHand',
  'Shuhalo',
  'SilverHand',
  'Silvermoon',
  'SistersofElune',
  'Skullcrusher',
  'Skywall',
  'Smolderthorn',
  'Spinebreaker',
  'Spirestone',
  'Staghelm',
  'SteamwheedleCartel',
  'Stonemaul',
  'Stormrage',
  'Stormreaver',
  'Stormscale',
  'Suramar',
  'Tanaris',
  'Terenas',
  'Terokkar',
  'Thaurissan',
  'TheForgottenCoast',
  'TheScryers',
  'TheUnderbog',
  'TheVentureCo',
  'ThoriumBrotherhood',
  'Thrall',
  'Thunderhorn',
  'Thunderlord',
  'Tichondrius',
  'TolBarad',
  'Tortheldrin',
  'Trollbane',
  'Turalyon',
  'TwistingNether',
  'Uldaman',
  'Uldum',
  'Undermine',
  'Ursin',
  'Uther',
  'Vashj',
  'Veknilash',
  'Velen',
  'Warsong',
  'Whisperwind',
  'Wildhammer',
  'Windrunner',
  'Winterhoof',
  'WyrmrestAccord',
  'Ysera',
  'Ysondre',
  'Zangarmarsh',
  'Zuljin',
  'Zuluhed'
]

var generateServers = () => {
  servers.forEach((server) => {
    var serverToSave = new Server({
      'serverName': server,
      'serverLocale': 'en-us'
    })

    serverToSave.save(err => {
      console.log(err)
    })
  })
}
