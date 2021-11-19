require("dotenv").config();
const mongoose = require("mongoose");
const Post = require("./../models/post.model");

const posts = [
  {
    title: "So many Spanish verb conjugations!",
    postPicture: "images/spanish.jpg",
    description:
      "I'm studying spanish present verbs today! There's so many conjugations! Anyone has tips to memorize them?",
    languageTag: "spanish",
  },
  {
    title: "Chinese notes",
    postPicture: "images/chinese.jpg",
    description: "Learning more vocabulary today! This lesson may come in handy when I visit Beijing",
    languageTag: "chinese",
  },
  {
    title: "My spanish duolingo streak",
    postPicture: "images/spanish2.jpg",
    description: "Consistency is the key ",
    languageTag: "spanish",
  },
  {
    title: "Reviewing with Arabic Pod 101",
    postPicture: "images/arabic.jpg",
    description: "Brushing up on my arbic with arabicpod101. They have great resources on their website!",
    languageTag: "arabic",
  },
  {
    title: "Help with Czech!",
    postPicture: "images/czech.jpg",
    description: "Czech pronunciation is hard :( ",
    languageTag: "czech",
  },
  {
    title: "Advanced english goals",
    postPicture: "images/english.jpg",
    description: "Has anyone tried this book? I want to take my english speaking habilities to the next level",
    languageTag: "english",
  },
  {
    title: "I passed my TOPIK 2 exam! ",
    postPicture: "images/korean.jpg",
    description:
      "After so much hard work I finally passed my exam! Good luck for everyone taking this exam in the future!",
    languageTag: "korean",
  },
  {
    title: "Afrikaans Book recommendation",
    postPicture: "images/afrikaans.jpg",
    description:
      "I recommend this one to anyone who is starting out with Afrikaans. Very clear lessons and easy to follow!",
    languageTag: "afrikaans",
  },
  {
    title: "Studying for TOPIK 2",
    postPicture: "images/korean2.jpg",
    description: "Studying for TOPIK 2 next month. Anyone can help me practice? Let's connect!",
    languageTag: "korean",
  },
  {
    title: "Best app for studying chinese?",
    postPicture: "images/chinese2.jpg",
    description: "What app do you think has the best vocab and grammar resources? Let's connect",
    languageTag: "chinese",
  },
];

const MONGO_URI = process.env.MONGODB_URI;

// SEED SEQUENCE

// 1. Connect to DB

// 2. Drop the DB

// 3. Insert data

// 4. Close connection to DB
