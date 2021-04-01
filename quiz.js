class Quiz{
    constructor(){

    }
    getState(){
        var getStateRef = database.ref("gameState");
        getStateRef.on("value",function(data){
            gameState = data.val();
        })

    }

    update(state){

            database.ref('/').update({gameState : state});
    }

    async start(){

        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();

        }
    }


    play(){
        
        this.title = createElement("h2");
        this.title.html("Result Of The Quiz");
        this.title.position(350,0);

        Contestant.getContestantInfo();

        if(allContestants!==undefined){
            fill("blue");
            textSize(20);
            text("*NOTE: Contestant who answered correct are highlighted in green colour",130,230);

            var display_position = 230;
            for(var plr in allContestants){
                var correctAns = 2;
                if(allContestants[plr].answer == correctAns){
                    fill("green")
                }
                else{
                    fill("red")
                }
                display_position+=20;
                textSize(15);
                text(allContestants[plr].name + ":" + allContestants[plr].answer , 220,display_position);
            }
        }
        //background("yellow");
    }
}