type Char = {
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
    bold: boolean,
    underlined: boolean,
    opacity: number,
}

export enum Alignment {
    WithOut,
    Left,
    Centre,
    Right
}

type Block = {
    id: string
}

type TextBlock = Block & {
    xCoord: number,
    yCoord: number,
    type: 'text',
    chars: Array<Char>,
    alignment: Alignment
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

type Circle = GraphicObject & {
    radius: number,
    xCoordCentre: number,
    yCoordCentre: number
}

type Rectangle = GraphicObject & {
    xCoord: number,
    yCOord: number,
    width: number,
    height: number,
}

type Triangle = GraphicObject & {
    xFirstCoord: number,
    yFitrstCoord: number,
    xSecondCoord: number,
    ySecondCoord: number,
    xThirdCoord: number,
    yThirdCoord: number,
}

type ImageAndVideoBlock = Block & {
    xCoord: number,
    yCoord: number,
    type: 'image',
    urlStr: string,
}

type Audio = Block & {
    xCoord: number,
    yCoord: number,
    urlStr: string,
}

type BackColor = {
    color: string
}

type BackImage = {
    urlStr: string,
}

type Background = {
    type: BackColor | BackImage
}

export enum TypeTransition {
    Default,
    Fading,
    Scrolling,
}

export enum TypeAnimation {
    Moving,
    Appearing,
}

type Animation = Block & {
    animation: TypeAnimation
}

type Slide = Background & {
    elements: Array<Block>,
    chosenElements: Array<Block>,
    transition: TypeTransition,
    animations: Array<Animation>,
}

type Presentation = {
    slides: Array<Slide>,
}

export enum TypeViewingMode {
    Editor,
    SlideShow,
}

type MainEditor = {
    presentation: Presentation,
    chosenSlides: Array<Slide>,
    history: Array<Presentation>
    viewingMode: TypeViewingMode,
}