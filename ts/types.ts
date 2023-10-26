type Char = {
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
    type: 'text',
    chars: Array<Char>,
    chosenChars: Array<Char>,
    alignment: 'Without' | 'Left' | 'Centre' | 'Right',
    angelRotate: number,
}

type GraphicObject = Block & {
    type: 'graphics',
    color: string,
    borderThickness: number,
    colorBorder: string,
    text: TextBlock,
    opacity: number,
    angelRotate: number,
}

type Ellipse = GraphicObject & { //как это рисовать то? Радиуса не достаточно
    radius: number,
    Centre: Point,
}

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
    type: 'image',
    urlStr: string,
}

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
    urlStr: string,
}

type Background = {
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

type Slide = {
    id: string,
    background: Background,
    elements: Array<Block>,
    chosenElements: Array<Block>,
    transition: TransionType,
    animations: Array<string>,
}

type Presentation = {
    name: string,
    slides: Array<Slide>,
    
}

type MainEditor = {
    presentation: Presentation,
    chosenSlideIds: Array<string>,
    history: Array<Presentation>
    viewingMode: 'editor' | 'slideShow',
}

export{
    TextBlock, Ellipse, 
}
