var canvas,contestantCount,database,quiz,question,contestant,allContestants,gameState = 0;
var backgroundColor;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  console.log(database);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
  backgroundColor ="pink"
}


function draw(){
  background(backgroundColor);
  if(contestantCount === 2){
    quiz.update(1);
  }

  if(gameState === 1){
    clear();
    quiz.play();
    backgroundColor = "yellow";
  }

  
}
