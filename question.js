class Question{
    constructor(){
        this.title = createElement("h2");
        this.subTitle = createElement("h3");
        this.option1 = createElement("h4");
        this.option2 = createElement("h4");
        this.option3 = createElement("h4");
        this.option4 = createElement("h4");
        this.input = createInput("Enter Your Name Here");
        this.input2= createInput("Enter Correct Option No.");
        this.submit = createButton("submit");
    }

    hideDetails(){

            this.title.hide();
            this.input.hide();
            this.input2.hide();
            this.submit.hide();
    }

    display(){

            this.title.html("My Quiz Game");
            this.title.position(350,50);

            this.subTitle.html("Questions: What starts and ends with the letter 'E' , but has only one letter  ? ");
            this.subTitle.position(200,100);

            this.option1.html("1: Everyone");
            this.option1.position(200,120);
            this.option2.html("2: Envelope");
            this.option2.position(200,140);
            this.option3.html("3: Estimate");
            this.option3.position(200,160);
            this.option4.html("4: Example");
            this.option4.position(200,180);

            this.input.position(180,250);
            this.input2.position(400,250);
            this.submit.position(350,300);


            this.submit.mousePressed(()=>{
                this.title.hide();
                this.input.hide();
                this.submit.hide();
                contestant.name = this.input.value();
                contestant.answer = this.input2.value();
                contestantCount+=1;
                contestant.index = contestantCount;
                contestant.update();
                contestant.updateCount(contestantCount)

            });

    }
}