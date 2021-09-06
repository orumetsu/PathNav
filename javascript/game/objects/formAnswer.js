
export function formAnswer(level,widthQuestion,heightQuestion) {

    let titleForm =  'Your Answer : ';  
    let padding = 20;
    let sizeFont = 14;
    let posYForm  = heightQuestion +((height() - heightQuestion) * 0.5);
    let posXForm = padding + ( sizeFont * titleForm.split('').length);
    let posYButtonSubmit = posYForm;
    let posXButtonSubmit = width() - padding;
    let FormIsFilled = false;

        const button = add([
            pos(vec2(posXButtonSubmit,posYButtonSubmit)),
            rect(100,50),
            origin("right")
            ,color(0,0,0)]);

        const titleText = add([
            text("submit", 13),
            pos(vec2(posXButtonSubmit - 50,posYButtonSubmit)),
            origin("center"),
            color(1, 1, 1),
        ]);

        button.action(() => {
            if(FormIsFilled){
                if (button.isHovered()) {
                    button.color = rgb(1, 1, 1);
                    titleText.color = rgb(0,0,0);
                    if (mouseIsClicked()) {
                       
                    }
                } else {
                    titleText.color = rgb(1,1,1);
                    button.color = rgb(0, 0, 0);
                }
            }
        })
    

    const form = add([
        text(titleForm, sizeFont),
        pos(vec2(posXForm,posYForm)),
        origin("right"),
        color(0, 0, 0),
    ]);

    const answer = add([
        text('', 14),
        pos(vec2(posXForm,posYForm)),
        origin("left"),
        color(0, 0, 0),
    ]);

    charInput((textInput) => {
        let strAnswer = answer.text.split('');
        if(((answer.text == '' && (parseInt(textInput) == textInput || textInput == '-')) ||
        answer.text != '' && (parseInt(textInput) == textInput)) && strAnswer.length < 20 ){
            answer.text += textInput;
        }
    });

    answer.action(()=>{
        if(answer.text == ''){
            FormIsFilled = false;
            titleText.color = rgb(1,1,1);
            button.color = rgb(1, 1, 1);
        }else{
            FormIsFilled = true;
            titleText.color = rgb(1,1,1);
            button.color = rgb(0, 0, 0);
        }
    });

    keyPressRep("backspace", () => {
        answer.text = answer.text.substring(0, answer.text.length - 1);
    });

}