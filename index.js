#!/usr/bin/env node

const adjectives = [
  "Agile", "Brisk", "Brave", "Calm", "Clear", "Crisp", "Daring", "Eager", "Fierce", "Funny",
  "Grand", "Happy", "Hardy", "Humble", "Jolly", "Keen", "Kind", "Large", "Lively", "Loud",
  "Loyal", "Lucky", "Major", "Meek", "Mighty", "Minor", "Noble", "Odd", "Plucky", "Proud",
  "Pure", "Quick", "Quiet", "Rapid", "Rare", "Regal", "Rich", "Rigid", "Rough", "Rugged",
  "Silly", "Sincere", "Small", "Smart", "Snappy", "Solid", "Special", "Spunky", "Sturdy", "Sunny",
  "Sweet", "Swift", "Tangy", "Tender", "Tense", "Tiny", "Tough", "Tricky", "True", "Twisty",
  "Vast", "Vivid", "Wild", "Witty", "Wise", "Zany", "Zesty", "Breezy", "Bouncy", "Bossy",
  "Crafty", "Cozy", "Curvy", "Dizzy", "Dapper", "Dreamy", "Feisty", "Fluffy", "Foggy", "Frosty",
  "Funky", "Giddy", "Glossy", "Goofy", "Grainy", "Greedy", "Handy", "Icy", "Jazzy", "Jumpy",
  "Juicy", "Loopy", "Moody", "Mushy", "Nutty", "Peppy", "Puffy", "Quirky", "Snug"
];

const themes = {
  animals: [
    "Elephant", "Rhinoceros", "Hippopotamus", "Bison", "Moose", "Gaur", "Giraffe", "Yak", "Camel", "Horse",
    "Zebra", "Buffalo", "Tapir", "Warthog", "Wildebeest", "Caribou", "Okapi", "Reindeer", "Llama", "Vicuna",
    "Saiga", "Antelope", "Elk", "Bear", "Kangaroo", "Walrus", "Polar Bear", "Grizzly Bear", "Koala", "Leopard",
    "Tiger", "Lion", "Cheetah", "Jaguar", "Cougar", "Lynx", "Snow Leopard", "Oryx", "Sable", "Ocelot",
    "Pronghorn", "Dromedary", "Addax", "Barbary Sheep", "Wild Boar", "Ibex", "Eland", "Giant Panda", "Sloth Bear", "Aurochs",
    "Falcon", "Rocket", "Panther", "Comet", "Dragon", "Phoenix", "Cyclone", "Eagle", "Vortex", "Ninja",
    "Yeti", "Kraken", "Shark", "Cobra", "Wolf", "Puma", "Tusk", "Talon", "Golem", "Sprite",
    "Troll", "Ogre", "Imp", "Blaze", "Ember", "Spark", "Frost", "Storm", "Thunder", "Jet",
    "Dash", "Bolt", "Flame", "Glitch", "Prism", "Pixel", "Pulse", "Orbit", "Drift", "Surge",
    "Whirl", "Zephyr", "Echo", "Mirage", "Phantom", "Shadow", "Wisp"
  ],
  tvshows: [
    "Friends", "Breaking Bad", "Game of Thrones", "Office", "Stranger Things", "Simpsons", "Seinfeld", "Wire",
    "Mad Men", "Sopranos", "Lost", "Walking Dead", "Parks and Recreation", "Modern Family", "Grey's Anatomy"
  ],
  movies: [
    "Star Wars", "Godfather", "Pulp Fiction", "Matrix", "Forrest Gump", "Titanic", "Jurassic Park", "Lion King",
    "Avatar", "Dark Knight", "Inception", "Fight Club", "Goodfellas", "Shawshank Redemption", "Back to the Future"
  ],
  superheroes: [
    "Superman", "Batman", "Spider-Man", "Wonder Woman", "Iron Man", "Captain America", "Thor", "Black Widow",
    "Flash", "Green Lantern", "Aquaman", "Black Panther", "Doctor Strange", "Ant-Man", "Captain Marvel"
  ],
  space: [
    "Galaxy", "Nebula", "Pulsar", "Quasar", "Comet", "Asteroid", "Meteor", "Satellite",
    "Orbit", "Cosmos", "Void", "Nova", "Supernova", "Black Hole", "Wormhole"
  ],
  explorers: [
    "Columbus", "Magellan", "Marco Polo", "Lewis and Clark", "Amundsen", "Shackleton", "Livingstone", "Stanley",
    "Cook", "Drake", "Vasco da Gama", "Hudson", "Champlain", "Coronado", "Pizarro"
  ],
  wine: [
    "Cabernet", "Merlot", "Pinot Noir", "Chardonnay", "Sauvignon Blanc", "Syrah", "Malbec", "Zinfandel",
    "Riesling", "Pinot Grigio", "Sangiovese", "Nebbiolo", "Tempranillo", "Grenache", "Viognier"
  ],
  videogames: [
    "Mario", "Zelda", "Sonic", "Pac-Man", "Tetris", "Pong", "Space Invaders", "Donkey Kong",
    "Street Fighter", "Final Fantasy", "Pokemon", "Halo", "Call of Duty", "Minecraft", "Fortnite"
  ],
  myths: [
    "Zeus", "Hercules", "Odysseus", "Achilles", "Medusa", "Minotaur", "Cyclops", "Siren",
    "Phoenix", "Dragon", "Unicorn", "Griffin", "Pegasus", "Centaur", "Hydra"
  ],
  coffee: [
    "Espresso", "Cappuccino", "Latte", "Americano", "Mocha", "Macchiato", "Flat White", "Cortado",
    "Ristretto", "Affogato", "Irish Coffee", "Turkish Coffee", "Cold Brew", "Pour Over", "French Press"
  ],
  snacks: [
    "Popcorn", "Chips", "Pretzels", "Nuts", "Crackers", "Cookies", "Candy", "Chocolate",
    "Gummies", "Jerky", "Trail Mix", "Granola", "Fruit Snacks", "Cheese Puffs", "Rice Cakes"
  ]
};

/**
 * Sprint Namer - A tool for generating creative sprint names
 */

function generateSprintName(theme = 'animals', includeAdjective = false) {
  const themeNouns = themes[theme] || themes.animals;
  const randomNoun = themeNouns[Math.floor(Math.random() * themeNouns.length)];

  if (includeAdjective) {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    return `${randomAdjective} ${randomNoun}`;
  }

  return randomNoun;
}

function parseArguments() {
  const args = process.argv.slice(2);
  const options = { count: 1, theme: 'animals', includeAdjective: false };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--count' || args[i] === '-c') {
      const countValue = args[i + 1];
      if (countValue && !isNaN(countValue)) {
        options.count = parseInt(countValue, 10);
        i++; // Skip the next argument since we've used it as the count value
      } else {
        console.error('Error: --count/-c requires a number value');
        process.exit(1);
      }
    } else if (args[i] === '--theme' || args[i] === '-t') {
      const themeValue = args[i + 1];
      if (themeValue && themes[themeValue]) {
        options.theme = themeValue;
        i++; // Skip the next argument since we've used it as the theme value
      } else {
        console.error('Error: --theme/-t requires a valid theme. Available themes:');
        console.error(Object.keys(themes).join(', '));
        process.exit(1);
      }
          } else if (args[i] === '--adjective' || args[i] === '-a') {
        options.includeAdjective = true;
      } else if (args[i] === '--help' || args[i] === '-h') {
        console.log('Sprint Namer - Generate creative sprint names');
        console.log('');
        console.log('Usage: node index.js [options]');
        console.log('');
        console.log('Options:');
        console.log('  -c, --count <number>    Number of sprint names to generate (default: 1)');
        console.log('  -t, --theme <theme>     Theme for sprint names (default: animals)');
        console.log('  -a, --adjective        Include adjectives in sprint names (default: false)');
        console.log('  -h, --help             Show this help message');
        console.log('');
        console.log('Available themes:');
        console.log('  ' + Object.keys(themes).join(', '));
        console.log('');
        console.log('Examples:');
        console.log('  node index.js                    # Generate 1 animal-themed sprint name');
        console.log('  node index.js -c 5               # Generate 5 animal-themed sprint names');
        console.log('  node index.js -t superheroes     # Generate 1 superhero-themed sprint name');
        console.log('  node index.js -c 3 -t movies     # Generate 3 movie-themed sprint names');
        console.log('  node index.js -a                 # Generate 1 animal-themed sprint name with adjective');
        console.log('  node index.js -t coffee -a       # Generate 1 coffee-themed sprint name with adjective');
        process.exit(0);
    }
  }

  return options;
}

// When run directly
if (require.main === module) {
  const options = parseArguments();

  for (let i = 0; i < options.count; i++) {
    console.log(`Sprint Name ${i + 1}: ${generateSprintName(options.theme, options.includeAdjective)}`);
  }
}

module.exports = { generateSprintName, themes };