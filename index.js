#!/usr/bin/env node

/**
 * Sprint Namer - A tool for generating creative sprint names
 */

function generateSprintName() {
  // This is a simple placeholder implementation
  // We'll expand this with more sophisticated logic later
  const adjectives = ['Agile', 'Swift', 'Dynamic', 'Bold', 'Creative'];
  const nouns = ['Journey', 'Sprint', 'Venture', 'Mission', 'Quest'];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective} ${randomNoun}`;
}

// When run directly
if (require.main === module) {
  console.log('Generated Sprint Name:', generateSprintName());
}

module.exports = { generateSprintName };