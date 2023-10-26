export type Char = {
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

export type Block = {
    id: string
}

export type TextBlock = Block & {
    xCoord: number,
    yCoord: number,
    type: 'text',
    chars: Array<Char>,
    alignment: Alignment
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

export type Circle = GraphicObject & {
    radius: number,
    xCoordCentre: number,
    yCoordCentre: number
}

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
    type: 'image',
    urlStr: string,
}

export type Audio = Block & {
    xCoord: number,
    yCoord: number,
    urlStr: string,
}

export type BackColor = {
    color: string
}

export type BackImage = {
    urlStr: string,
}

export type Background = {
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

export type Slide = Background & {
    elements: Array<Block>,
    chosenElements: Array<Block>,
    transition: TypeTransition,
    animations: Array<Animation>,
}

export type Presentation = {
    slides: Array<Slide>,
}

export enum TypeViewingMode {
    Editor,
    SlideShow,
}

export type MainEditor = {
    presentation: Presentation,
    chosenSlides: Array<Slide>,
    history: Array<Presentation>
    viewingMode: TypeViewingMode,
}