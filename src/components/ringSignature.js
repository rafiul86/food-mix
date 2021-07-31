const lrs = require('lrs');

let alice = lrs.gen();
let bob = lrs.gen();
let janie = lrs.gen();

let group = [alice, bob, janie].map(m =>{
    m.privateKey
})

let signed = lrs.sign(group, alice, 'omago');

let signed2 = lrs.sign(group, alice, 'Kidding omago');

console.log(lrs.link(signed,signed2))