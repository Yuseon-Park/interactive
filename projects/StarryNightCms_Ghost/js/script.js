let app = document.getElementById("app");
let s = new Sheets("1yAfGL2XQOr1tuk9yWUi3PsGku6cYCGY-UTmtIFR8rQI");

s.getMyData().then((d) => {
  // fetch for data in a specific row
  let heading = s.getKey("Meta-Title");

  // Create an element and append to selector
  s.createElement({
    tag: "h1",
    content: heading,
  }).appendTo("#app");

  // Create an element and append to selector
  let descriptions = s.getKey("Meta-Description");
  s.createElement({
    tag: "p",
    content: descriptions,
  }).appendTo("#app");

  // Create an element and append to selector
  let about = s.getKey("About");
  s.createElement({
    tag: "p",
    content: about,
  }).appendTo("#app");


  // Collapse rows into an array of object for easy looping
  let ul = s.collapseKeys("UL-Date", "UL-Description", "UL-Location", "UL-CalenderName");
  
  for (let row of ul){
    let entry =  s.createElement({
      tag: "div",
      className:"entry",
      children: [
        { tag: "p", content: row["UL-Date"] },
        { tag: "p", content: row["UL-Description"] },
        { tag: "p", content: row["UL-Location"] },
        { tag: "p", content: row["UL-CalenderName"] },
      ],
    })
    
    randomPosition(entry.element)
    entry.appendTo("#app");
  }
});


function randomPosition(entry){
  if(!entry){
    return;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  
  const randomWidth = Math.random() * width
  const randomHeight = Math.random() * height
  
  entry.style.position = "absolute"
  entry.style.top = `${(randomHeight / height) * 100}%`
  entry.style.left = `${(randomWidth / width) * 100}%`
}
