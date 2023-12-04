const Characters = [

{   Name: "Caelus",
    Element: "Vary",
    Path: "Vary",
    Rating: '5',
    Affiliation: "Astral Express",
    WorldStoryAppear: ['1', '2', '3']
},
{
    Name: "Stelle",
    Element: "Vary",
    Path: "Vary",
    Rating: '5',
    Affiliation: "Astral Express",
    WorldStoryAppear: ['1', '2', '3']
},
{
    Name: "March 7th",
    Element: "Ice",
    Path: "Preservation",
    Rating: '4',
    Affiliation: "Astral Express",
    WorldStoryAppear: ['1', '2', '3']
},

];
// arrow function ()=> auto returns output, this keyword points global.
/* const graduated = students.filter((student) => student.graduated === true);
console.log(graduated); */
    const Rating = Characters.filter((Character) => Character.Rating>4);
    console.log(Rating)
Characters.forEach((HSR) => console.log(HSR.Name));
Characters.forEach((HSR) => console.log(HSR.Element));
Characters.forEach((HSR) => console.log(HSR.Path));
Characters.forEach((HSR) => console.log(HSR.Rating));
Characters.forEach((HSR) => console.log(HSR.Affiliation));
Characters.forEach((HSR) => {
    HSR.WorldStoryAppear.forEach((WorldStory) => {
        console.log(WorldStory)
    })})
    
    


