// Question 1
function instagramPost(handle, content, imageLink, noOfViews, noOfLikes) {
    this.handle = handle;
    this.content = content;
    this.imageLink = imageLink;
    this.noOfViews = noOfViews;
    this.noOfLikes = noOfLikes;
}

// Question 2
const instaPost1 = new instagramPost('rezzy007', 
'Hi there! I am Orezi', 
'https://news.mit.edu/sites/default/files/images/202209/MIT-Saturn-Satellite-A01.jpg', 
'1 million views', 
'540,000 likes'
);
console.log(instaPost1);

const instaPost2 = new instagramPost('i_am_nickey', 
'Hey guys it\'s Nicky. Watch out for my new album', 
'https://imageio.forbes.com/specials-images/imageserve/5e2cb634f133f400076aabb4/vietnam/0x0.jpg?format=jpg&crop=782,521,x2,y1,safe&width=960', 
'3 million views', 
'2,450,050 likes'
);
console.log(instaPost2);

//Question 3
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location
    }
}

const person1 = createPerson('Musa', 17, 'Jos');
console.log(person1);

function createJambScores(eng, govt, lit, crk) {
    return {
        Eng: eng,
        Govt: govt,
        Lit: lit,
        Crk: crk
    }
}

const scores = createJambScores(70, 85, 82, 94);
console.log(scores);

//Question 4
// ways to clone an Object

// (a) using object.assign()
// example:
const favoriteThings = {
    color: 'Navy blue',
    hobby: 'Music',
    career: 'Software developer',
    movie: 'Action movies'
}
console.log(favoriteThings);

const favorites = Object.assign({}, favoriteThings);
favorites.color = 'Brown'
console.log(favorites);

// (b) using spread method
// example:
const favorites2 = { ...favoriteThings };
favorites2.color = 'Black'
console.log(favorites2);

// (c) using JSON.parse
// example:
const favorites3 = JSON.parse(JSON.stringify(favoriteThings));
favorites3.color = 'White'
console.log(favorites3);

//Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar'
}

for (let key of Object.keys(presidentialCandidates)) {
    console.log(`${presidentialCandidates[key]} is the presidential candidate of ${key}`);
}