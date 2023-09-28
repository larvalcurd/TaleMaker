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

type BlockElemSlide = Block & {
    xCoord: number,
    yCoord: number
}

type TextBlock = BlockElemSlide & {
    type: 'text',
    chars: Array<Char>,
    alignment: Alignment
}

type ImageBlock = BlockElemSlide & {
    type: 'image',
    data: string,
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