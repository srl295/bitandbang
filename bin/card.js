#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const Card = require('../main')
const card = new Card();
const package = require('../package');
const {
  name, handle, work, twitter, github, linkedin, web
} = card.data;
const npx = package.name;

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  'name': chalk.white('Mikeal Rogers /'),
  'handle': chalk.cyan('mikeal'),
  'work': chalk.white('Doing many things at Protocol Labs'),
  'twitter': chalk.cyan('https://twitter.com/mikeal'),
  'github': chalk.cyan('https://github.com/mikeal'),
  'linkedin': chalk.cyan('https://linkedin.com/in/mikealrogers'),
  'web': chalk.cyan('https://www.mikealrogers.com'),
  'npx': chalk.white('npx mikeal'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelLinkedIn': chalk.white.bold('  LinkedIn:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline + twittering + newline + githubing + newline + linkedining + newline + webing + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
