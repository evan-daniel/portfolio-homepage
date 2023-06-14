
// IMAGES 

import number_games from './img/numbergames.svg'; 
import lociai from './img/LociAi.png'; 
import mnemonic_exercises from './img/MnemonicExercises.png'; 
import feedback from './img/Feedback.png'; 
// import encoding from './img/EvanDaniel_2022_PiCirclesMonochrome_Small.png'; 
import encoding from './img/Encoding.png'; 
import take_a_number from './img/TakeANumber.jpg';
import pixels from './img/EvanDaniel_2014_Breakthrough_Small.png'; 

// HOMEPAGE PROJECT SOURCE OF TRUTH 

const projects = [
    {
        title: 'Loci AI', 
        slug: 'lociai', 
        pdf: 'https://evandaniel.com/loci_ai', 
        link: 'https://lociai.com', 
        description: '3D game powered by AI that helps you memorize', 
        img: { lociai }, 
    }, 
    {
        title: 'Number Games', 
        slug: 'numbergames', 
        pdf: 'https://evandaniel.com/number_games', 
        link: 'https://number.games', 
        description: 'Educational site for practicing numerical thinking', 
        img: { number_games }, 
    }, 
    {
        title: 'Recitation and Networks', 
        slug: 'networks', 
        pdf: 'https://evandaniel.com/recitation_and_networks', 
        description: 'Experiments reciting π over networks', 
        img: { mnemonic_exercises }, 
    }, 
    {
        title: 'Numeric Feedback', 
        slug: 'feedback', 
        pdf: 'https://evandaniel.com/numeric_feedback', 
        description: 'Speculative feedback systems', 
        img: { feedback }, 
    }, 
    {
        title: 'Encoding Numbers', 
        slug: 'encoding', 
        pdf: 'https://evandaniel.com/encoding_numbers', 
        description: 'Performative data visualization', 
        img: { encoding }, 
    }, 
    {
        title: 'Take a Number', 
        slug: 'takeanumber', 
        pdf: 'https://evandaniel.com/take_a_number', 
        link: 'https://take-a-number.evandaniel.com/', 
        description: 'I recited π to 10,000 digits by sculpting marble', 
        img: { take_a_number }, 
    }, 
    {
        title: 'Pi-xels', 
        slug: 'pixels', 
        pdf: 'https://evandaniel.com/pi-xels', 
        description: 'Reciting π from memory to draw and paint', 
        img: { pixels }, 
    }, 
    {
        title: 'Memorization and Text', 
        slug: 'memorizationtext', 
        pdf: 'https://evandaniel.com/memorization_and_text', 
        description: 'Philosophical investigations into text and memory', 
        img: { lociai }, 
    }, 
    {
        title: 'Reciting π as Art', 
        slug: 'writingpi', 
        pdf: 'https://evandaniel.com/writing_numbers_from_memory', 
        description: 'The art of reciting π from memory', 
        img: { lociai }, 
    }, 
    {
        title: 'The Man\'s Plane', 
        slug: 'mansplane', 
        pdf: 'https://evandaniel.com/mans_plane', 
        link: 'https://mansplane.com/', 
        description: 'Critique of mansplaining (alpha release)', 
        img: { lociai }, 
    }, 
    {
        title: 'Cubist Paintings', 
        slug: 'cubism', 
        pdf: 'https://evandaniel.com/cubist_paintings', 
        description: 'Paintings exploring formal representation', 
        img: { lociai }, 
    }, 
    {
        title: 'Illustrations', 
        slug: 'smokeyrobotic', 
        pdf: 'https://evandaniel.com/illustrations_for_smokey_robotic', 
        description: 'Naturalistic paintings and drawings a band named after a bear', 
        img: { lociai }, 
    }, 
]

export default projects; 