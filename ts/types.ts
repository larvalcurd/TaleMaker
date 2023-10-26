export type Char = {
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
    bold: boolean,
    underlined: boolean,
    opacity: number,
}

enum Alignment {
    Without,
    Left,
    Centre,
    Right
}

<<<<<<< HEAD
export type Block = {
    id: string
}

export type TextBlock = Block & {
    xCoord: number,
    yCoord: number,
=======
type Point = {
    x: number,
    y: number,
}

type Block = {
    id: string,
    point1: Point,
    point2: Point,
}

type TextBlock = Block & {
>>>>>>> types
    type: 'text',
    chars: Array<Char>,
    chosenChars: Array<Char>,
    alignment: 'Without' | 'Left' | 'Centre' | 'Right',
    angelRotate: number,
}

export type GraphicObject = Block & {
    type: 'graphics',
    color: string,
    borderThickness: number,
    colorBorder: string,
    text: TextBlock,
    opacity: number,
    angelRotate: number,
}

<<<<<<< HEAD
export type Circle = GraphicObject & {
=======
type Ellipse = GraphicObject & { //как это рисовать то? Радиуса не достаточно
>>>>>>> types
    radius: number,
    Centre: Point,
}

<<<<<<< HEAD
export type Rectangle = GraphicObject & {
    xCoord: number,
    yCOord: number,
    width: number,
    height: number,
}

export type Triangle = GraphicObject & {
    xFirstCoord: number,
    yFitrstCoord: number,
    xSecondCoord: number,
    ySecondCoord: number,
    xThirdCoord: number,
    yThirdCoord: number,
}

export type ImageAndVideoBlock = Block & {
    xCoord: number,
    yCoord: number,
=======
type Rectangle = GraphicObject & {}

type EquilTriangle = GraphicObject & {
    point1: Point,
    point2: Point,
    point3: Point,
}

type RightTriangle = GraphicObject & {
    point1: Point,
    point2: Point,
    point3: Point,
}

type ImageAndVideoBlock = Block & {
>>>>>>> types
    type: 'image',
    urlStr: string,
}

<<<<<<< HEAD
export type Audio = Block & {
    xCoord: number,
    yCoord: number,
    urlStr: string,
}

export type BackColor = {
    color: string
}

export type BackImage = {
=======
type Audio = Block & {
    type: 'audio',
    urlStr: string,
}

type BackColor = {
    type: 'backColor',
    color: string,
}

type BackImage = {
    type: 'backImage'
>>>>>>> types
    urlStr: string,
}

export type Background = {
    type: BackColor | BackImage
}

enum TransionType {
    Default,
    Fading,
    Scrolling,
}

enum TypeAnimation {
    Moving,
    Appearing,
}

type Animation = {
    block: Block,
    animation: TypeAnimation,
}

<<<<<<< HEAD
export type Slide = Background & {
=======
type Slide = {
    id: string,
    background: Background,
>>>>>>> types
    elements: Array<Block>,
    chosenElements: Array<Block>,
    transition: TransionType,
    animations: Array<string>,
}

<<<<<<< HEAD
export type Presentation = {
=======
type Presentation = {
    name: string,
>>>>>>> types
    slides: Array<Slide>,
    
}

export type MainEditor = {
    presentation: Presentation,
    chosenSlideIds: Array<string>,
    history: Array<Presentation>
    viewingMode: 'editor' | 'slideShow',
}

export{
    TextBlock, Ellipse, 
}
