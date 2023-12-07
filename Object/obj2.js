let myHeroes = ['thor','spiderman']
let dcHeroes = ['batman','green lantern']

let heropower = {
    thor : 'hammer',
    spiderman :'sling',

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function ()
{
    console.log('Hitesh is present in all objects');
}

myHeroes.hitesh()

//inheritance , prototypical chaining

const user = {
    name : 'top name',
    email: 'topuser@gmail.com'
}

const Teacher = {
    makeVideos : true
}

const TeachingSupport = {
    isAvailable : false
}

const TSAssistant = {
    makeAssignment : ' JS assignment ',
    fullTime : true,
    __proto__: TeachingSupport,
}


Teacher.__proto__ = user //Old method of doing this

//Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

//Goal : get truelength of string

