"use strict";

const relative = [
  "Mom",
  "Dad",
  "Grandma Grace",
  "Pappaw",
  "Mammaw",
  "Poppy",
  "Adam",
  "Alex",
  "Uncle Terry",
  "Uncle Jeff",
];

const adj1 = [
  "goofy",
  "dilapidated",
  "curious",
  "feisty",
  "spellbinding",
  "innocent",
  "dweebish",
  "smelly",
];

const adj2 = [
  "strong",
  "weak",
  "sinister",
  "ghoolish",
  "smart",
  "dumb",
  "old",
  "young",
];

const adj3 = [
  "flawless",
  "perfect",
  "patient",
  "eager",
  "blue",
  "green",
  "yellow",
  "purple",
];

const personInRoom = ["Daniel", "Michael", "Sam", "Brian", "Anthony"];

const adj4 = [
  "near",
  "far",
  "ancient",
  "spastic",
  "genial",
  "gay",
  "straight",
  "narrow",
];

const adj5 = ["gassy", "bloated", "icky", "jovial", "benevolent", "aged"];

const verbEd = [
  "raced",
  "farted",
  "knighted",
  "snookered",
  "hammered",
  "testified",
];

const bodyPart = ["arm", "leg", "weenis", "penis", "head", "neck"];

const verbIng = [
  "teaching",
  "shouting",
  "teeming",
  "eating",
  "peeing",
  "steaming",
];

const nounPlural = [
  "snakes",
  "Mrs. Doubtfires",
  "jelly rollers",
  "houses",
  "butts",
  "telephones",
];

const noun = ["team", "bus", "pollution", "jester", "park", "port-o-potti"];

const adverb = [
  "furiously",
  "flatulently",
  "quickly",
  "oddly",
  "mostly",
  "comically",
];

const verb1 = ["run", "walk", "eat", "sleep", "hike", "pinch"];

const verb2 = ["smell", "reach", "e-meet", "scold", "bleach", "crawl"];

function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const letterFromCamp = () => {
  return `Dear ${getRandomWord(relative)},
    I am having a(n) ${getRandomWord(
      adj1
    )} time at camp. The counselour is ${getRandomWord(
    adj2
  )} and the food is ${getRandomWord(adj3)}. I met ${getRandomWord(
    personInRoom
  )} and we became ${getRandomWord(
    adj4
  )} friends. Unfortunately, Sam is ${getRandomWord(
    adj5
  )} and I ${getRandomWord(verbEd)} my ${getRandomWord(
    bodyPart
  )} so we couldn't go ${getRandomWord(
    verbIng
  )} like everybody else. I need more ${getRandomWord(
    nounPlural
  )} and a ${getRandomWord(noun)} sharpener, so please ${getRandomWord(
    adverb
  )} ${getRandomWord(verb1)} more when you ${getRandomWord(verb2)} back.
    Your ${getRandomWord(relative)},
    ${getRandomWord(personInRoom)}`;
};

console.log(letterFromCamp());
