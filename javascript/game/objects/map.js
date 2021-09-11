export const mapList = [

// Level 1
[
'=====',
'= *==',
'=== =',
'=* *=',
],

];

export const mapConfig = {
    width: 20,
    height: 20,
    pos: vec2(0,0),
    ' ': [sprite('air')],
    '=': [sprite('floor')],
    '*': [sprite('red_target')], // Interchange with green_targe
};