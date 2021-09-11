import { formAnswer } from "../objects/formAnswer.js";
import { question } from "../objects/question.js";

export function startSoal() {

    scene('soal', (level) => {   
        layers(['bg', 'arena', 'player', 'ui'], 'player');
        let widthQuestion = width();
        let heightQuestion = height() * 0.8;
        question(level,widthQuestion,heightQuestion);
        formAnswer(level,widthQuestion,heightQuestion);
    });
    
}