require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./../models/user.model");

const users = [
  {
    username: "Diogo",
    password: "$2a$10$ydclCsmokyeACocLaN1UyOg/Ef0zOykBOxboRM9FmzA9KLT4hTAWe",
    languagesISpeak: { type: { enum: ["portuguese", "english", "french"] } },
    languagesIWantToLearn: { type: { enum: ["japonese", "afrikaans"] } },
    socialMediaLink: "instagram.com/diogomonteeiro",
    profilePicture: "/ape.jpeg",
    userPosts: { type: [{ type: Schema.Types.ObjectId, ref: "Post" }] },
  },
  {
    username: "JohnDoe",
    password: "$2a$10$ydclC12okyefgocLaNlkyOg/Ef0zOykBOxboRM9FmzA9KLT4hTAWe",
    languagesISpeak: { type: { enum: ["english"] } },
    languagesIWantToLearn: { type: { enum: ["chinese"] } },
    socialMediaLink: "instagram.com/johndoerox",
    profilePicture: "/random1.jpeg",
    userPosts: { type: [{ type: Schema.Types.ObjectId, ref: "Post" }] },
  },
  {
    username: "SpanishPeterParker",
    password: "$2a320$ydclCsmokyeACocLaN1UyOg/Ef0zOykB12boRM9FmzA9KLT12TAWe",
    languagesISpeak: { type: { enum: ["spanish"] } },
    languagesIWantToLearn: { type: { enum: ["english"] } },
    socialMediaLink: "twitter.com/spiderman",
    profilePicture: "/random2.jpeg",
    userPosts: { type: [{ type: Schema.Types.ObjectId, ref: "Post" }] },
  },
  {
    username: "JaneDoe",
    password: "$12$10$ydclCsmokyeACocLaN1UyO12Ef0zOykBOxboRM43mzA9KLT4hT34e",
    languagesISpeak: { type: { enum: ["english"] } },
    languagesIWantToLearn: { type: { enum: ["french", "italian"] } },
    socialMediaLink: "instagram.com/janedoerox",
    profilePicture: "/random3.jpeg",
    userPosts: { type: [{ type: Schema.Types.ObjectId, ref: "Post" }] },
  },
  {
    username: "BatWoman",
    password: "$2a$10$ydclCsmok12A34cLaN1UyOg/Ef0zOyk56xboRM9FmzA978T4hTAWe",
    languagesISpeak: { type: { enum: ["portuguese", "french"] } },
    languagesIWantToLearn: { type: { enum: ["english"] } },
    socialMediaLink: "facebook.com/batwoman",
    profilePicture: "/random4.jpeg",
    userPosts: { type: [{ type: Schema.Types.ObjectId, ref: "Post" }] },
  },
];

// ! ASK STEFANO HOW TO CONNECT THE SEEDS WITH REFERENCES

const MONGO_URI = process.env.MONGODB_URI;

// SEED SEQUENCE

// 1. Connect to DB

// 2. Drop the DB

// 3. Insert data

// 4. Close connection to DB
