// This file ONLY holds the curriculum. You never have to touch the HTML again.
const daysData = {
  1: {
    title: "Day 1: The Vowel Garden 🌸",
    shortName: "Vowels",
    groups: [
      { name: "Open Mouth", desc: "அ / ஆ", letters: ["அ", "ஆ"] },
      { name: "Smile Twins", desc: "இ / ஈ", letters: ["இ", "ஈ"] },
      { name: "Whistle Twins", desc: "உ / ஊ", letters: ["உ", "ஊ"] },
      { name: "Grin & Triangle", desc: "எ, ஏ, ஐ", letters: ["எ", "ஏ", "ஐ"] },
      { name: "Round & Odd", desc: "ஒ, ஓ, ஔ, ஃ", letters: ["ஒ", "ஓ", "ஔ", "ஃ"] }
    ],
    allLetters: ["அ","ஆ","இ","ஈ","உ","ஊ","எ","ஏ","ஐ","ஒ","ஓ","ஔ","ஃ"],
    g2Pairs: [["அ","ஆ"], ["இ","ஈ"], ["உ","ஊ"], ["எ","ஏ"], ["ஒ","ஓ"]],
    g1Rounds: 5, g2Rounds: 3, g3Rounds: 2
  },
  2: {
    title: "Day 2: Consonant Fortress (Hard) 🏰",
    shortName: "Hard Consonants",
    groups: [
      { name: "Hook & Slide", desc: "க் / ச்", letters: ["க்", "ச்"] },
      { name: "Cup & Duck", desc: "ட் / த்", letters: ["ட்", "த்"] },
      { name: "Box & Twin", desc: "ப் / ற்", letters: ["ப்", "ற்"] }
    ],
    allLetters: ["க்", "ச்", "ட்", "த்", "ப்", "ற்"],
    g2Pairs: [["க்","க"], ["ச்","ச"], ["ட்","ட"], ["த்","த"], ["ப்","ப"], ["ற்","ற"]],
    g1Rounds: 4, g2Rounds: 3, g3Rounds: 2
  }
};
