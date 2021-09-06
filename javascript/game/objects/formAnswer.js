
export function formAnswer(level,widthQuestion,heightQuestion) {

    let titleForm =  'Input Your Answer';  
    let padding = 20;
    let sizeFont = 14;
    let posYInfo  = heightQuestion +((height() - heightQuestion) * 0.5);
    let posXInfo = padding;
    let posYButtonNFormSubmit = posYInfo;
    let posXButtonNFormSubmit = width() - padding;
    let FormIsFilled = false;

    add([
        text("B = +8 \n \nK =  0 \n \nS = -4", 14),
        pos(vec2(posXInfo,posYInfo)),
        origin("left"),
        color(0, 0, 0),
    ]);

    const form = add([
        text(titleForm, sizeFont),
        pos(vec2(posXButtonNFormSubmit ,posYButtonNFormSubmit)),
        origin("right"),
        color(0, 0, 0),
    ]);

    const button = add([
        pos(vec2(posXButtonNFormSubmit,posYButtonNFormSubmit)),
        rect(100,50),
        origin("right")
        ,color(0,0,0)]);

    const titleText = add([
        text("submit", 13),
        pos(vec2(posXButtonNFormSubmit - 50,posYButtonNFormSubmit)),
        origin("center"),
        color(1, 1, 1),
    ]);

    button.action(() => {
        if(FormIsFilled){
            if (button.isHovered()) {
                button.color = rgb(0.8, 0.8, 0.8);
                titleText.color = rgb(0,0,0);
                if (mouseIsClicked()) {
                   
                }
            } else {
                titleText.color = rgb(1,1,1);
                button.color = rgb(0, 0, 0);
            }
        }
    })

    const answer = add([
        text('', 14),
        pos(vec2(posXButtonNFormSubmit - 120,posYButtonNFormSubmit)),
        origin("right"),
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
            titleText.hidden = true;
            button.hidden = true;
            form.hidden = false;
        }else{
            FormIsFilled = true;
            titleText.hidden = false;
            button.hidden = false;
            form.hidden = true;
        }
    });

    keyPressRep("backspace", () => {
        answer.text = answer.text.substring(0, answer.text.length - 1);
    });

}