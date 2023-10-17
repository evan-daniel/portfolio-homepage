
// IMAGES 

import number_games from './img/numbergames.svg'; 
import memory_galleries from './img/MemoryGalleries.png'; 
import mnemonic_exercises from './img/EvanDaniel_MnemonicExercises.png'; 
import feedback from './img/Feedback.png'; 
// import encoding from './img/EvanDaniel_2022_PiCirclesMonochrome_Small.png'; 
import encoding from './img/Encoding.png'; 
import take_a_number from './img/TakeANumber_Silhouette.png'; 
import pixels from './img/EvanDaniel_2014_Breakthrough_Small.png'; 
import writingpi from './img/EvanDaniel_Cymbal.png'; 
import memorizationtext from './img/evandaniel_2014_rememberingmichaelbrown.jpg'; 
import mansplane from './img/EvanDaniel_Mansplaner.gif'; 
import cubism from './img/EvanDaniel_ScreamingMonster_Medium.png'; 
import illustrations from './img/EvanDaniel_RazorsAndBalloons.png'; 

// HOMEPAGE PROJECT SOURCE OF TRUTH 

const projects = [
    {
        title: 'Memory Galleries', 
        slug: 'memorygalleries', 
        pdf: 'https://evandaniel.com/memory_galleries', 
        link: 'https://memorygalleries.com', 
        description: '3D game powered by AI that helps you memorize', 
        img: { memory_galleries }, 
        cat: { dev: true, edu: true }, 
    }, 
    {
        title: 'Number Games', 
        slug: 'numbergames', 
        pdf: 'https://evandaniel.com/number_games', 
        link: 'https://number.games', 
        description: 'Educational site for practicing numerical thinking', 
        img: { number_games }, 
        cat: { dev: true, pi: true, edu: true }, 
    }, 
    {
        title: 'Encoding Numbers', 
        slug: 'encoding', 
        pdf: 'https://evandaniel.com/encoding_numbers', 
        description: 'Performative data visualization', 
        img: { encoding }, 
        cat: { pi: true, art: true }, 
    }, 
    {
        title: 'The Man\'s Plane', 
        slug: 'mansplane', 
        pdf: 'https://evandaniel.com/mans_plane', 
        link: 'https://mansplane.com/', 
        description: 'Critique of mansplaining (alpha release)', 
        img: { mansplane }, 
        cat: { dev: true }, 
    }, 
    {
        title: 'Cubist Paintings', 
        slug: 'cubism', 
        pdf: 'https://evandaniel.com/cubist_paintings', 
        description: 'Paintings exploring formal representation', 
        img: { cubism }, 
        cat: { art: true }, 
    }, 
    {
        title: 'Recitation and Networks', 
        slug: 'networks', 
        pdf: 'https://evandaniel.com/recitation_and_networks', 
        description: 'Experiments reciting π over networks', 
        img: { mnemonic_exercises }, 
        cat: { pi: true }, 
    }, 
    {
        title: 'Pi-xels', 
        slug: 'pixels', 
        pdf: 'https://evandaniel.com/pi-xels', 
        description: 'Reciting π from memory to draw and paint', 
        img: { pixels }, 
        cat: { pi: true, art: true }, 
    }, 
    {
        title: 'Take a Number', 
        slug: 'takeanumber', 
        pdf: 'https://evandaniel.com/take_a_number', 
        link: 'https://take-a-number.evandaniel.com/', 
        description: 'I recited π to 10,000 digits by sculpting marble', 
        img: { take_a_number }, 
        cat: { pi: true, art: true, edu: true }, 
    }, 
    {
        title: 'Numeric Feedback', 
        slug: 'feedback', 
        pdf: 'https://evandaniel.com/numeric_feedback', 
        description: 'Speculative feedback systems', 
        img: { feedback }, 
        cat: { pi: true, edu: true }
    }, 
    {
        title: 'Memorization and Text', 
        slug: 'memorizationtext', 
        pdf: 'https://evandaniel.com/memorization_and_text', 
        description: 'Philosophical investigations into text and memory', 
        img: { memorizationtext }, 
        cat: { art: true }
    }, 
    {
        title: 'Writing π from Memory', 
        slug: 'writingpi', 
        pdf: 'https://evandaniel.com/writing_numbers_from_memory', 
        description: 'The art of reciting π from memory', 
        img: { writingpi }, 
        cat: { pi: true, art: true }, 
    }, 
    {
        title: 'Illustrations', 
        slug: 'illustrations', 
        pdf: 'https://evandaniel.com/illustrations_for_smokey_robotic', 
        description: 'Naturalistic paintings and drawings for commercial use', 
        img: { illustrations }, 
        cat: { art: true }, 
    }, 
]

export default projects; 