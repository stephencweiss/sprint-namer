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

const nouns = [
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
];

/**
 * Sprint Namer - A tool for generating creative sprint names
 */

function generateSprintName() {
  // This is a simple placeholder implementation
  // We'll expand this with more sophisticated logic later
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
}

// When run directly
if (require.main === module) {
  console.log('Generated Sprint Name:', generateSprintName());
}

module.exports = { generateSprintName };