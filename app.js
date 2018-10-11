//add new note
d3.select("#new-note")
    .on('submit', function() {
      d3.event.preventDefault();
      var input = d3.select('input');
      d3.select(".live-note").remove();
      d3.select("#notes")
        .append('p')
          .classed('note', true)
          .text(input.property('value'));
      input.property('value', '');
    });

//delete all notes button
d3.select("#delete-notes")
    .on("click", function(){
      d3.select("#notes").selectAll("p").remove();
    });

//feeling lucky button - randomly changes font-size and color
d3.select("#feeling-lucky")
  .on("click", function(){
    d3.selectAll("p")
      .style("font-size", function(){
        return (Math.floor(Math.random() * 20)+10) + "px";
      })
      .style("color", getRandomColor);
      ;
  });

//show live input
d3.select("input")
  .on("focusin", function(){
    d3.select("#notes")
    .append('p')
    .classed('note', true)
    .classed('live-note', true)
  });

//hide live input
d3.select("input")
  .on("blur", function(){
    d3.select(".live-note")
    .remove();
  });

//updates live note paragraph
d3.select("input")
  .on("input", function(){
    d3.select(".live-note")
    .text(d3.select("input").property('value'));
});

//get random hex color - https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor(){
  let letters = '0123456789ABCDEF',
      color = '#';
      for (let i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color;
}