import { CountUp } from './countUp.min.js';

window.onload = function() {
    const socialMediaFollowing = new CountUp('socialMediaFollowing', 127401482, {duration: 4});
    socialMediaFollowing.start();

    const contentCreated = new CountUp('contentCreated', 27846, {duration: 3});
    contentCreated.start();

    const goalToImpactLives = new CountUp('goalToImpactLives', 1000000000, {duration: 6, suffix: '+'});
    goalToImpactLives.start();
}