const HSR = [

{   Name: "Caelus",
    Element: "Vary",
    Path: "Vary",
    Rating: "5",
    Affiliation: "Astral Express",
    WorldStoryAppear: ['1', '2', '3']
},
{
    Name: "Stelle",
    Element: "Vary",
    Path: "Vary",
    Rating: "5",
    Affiliation: "Astral Express",
    WorldStoryAppear: ['1', '2', '3']
},
{
    Name: "March 7th",
    Element: "Ice",
    Path: "Preservation",
    Rating: "4",
    Affiliation: "Astral Express",
    WorldStoryAppear: ['1', '2', '3']
},

];
// arrow function ()=> auto returns output, this keyword points global.
/* const graduated = students.filter((student) => student.graduated === true);
console.log(graduated); */
    const Rating = HSR.filter((HSR) => HSR.Rating>4);
    console.log(Rating)
HSR.forEach((HSR) => console.log(HSR.Name));
HSR.forEach((HSR) => console.log(HSR.Element));
HSR.forEach((HSR) => console.log(HSR.Path));
HSR.forEach((HSR) => console.log(HSR.Rating));
HSR.forEach((HSR) => console.log(HSR.Affiliation));
HSR.forEach((HSR) => {
    HSR.WorldStoryAppear.forEach((WorldStory) => {
        console.log(WorldStory)
    })})
    
    


