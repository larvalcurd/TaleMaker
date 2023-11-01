import {
	TextBlock, Ellipse, Rectangle, EquilTriangle, RightTriangle, ImageBlock,
	BackColor, Slide, Presentation, MainEditor
} from "./types";

const textBlock: TextBlock = {
	id: "id1",
	point1: { x: 0, y: 0 },
	point2: { x: 10, y: 10 },
	type: "text",
	chars: [
		{
			value: "q",
			fontSize: 14,
			fontFamily: "Comic Sans MS",
			color: "#000000",
			bold: false,
			underlined: false,
			opacity: 100,
		},
	],
	chosenChars: [],
	alignment: "Without",
	angelRotate: 30,
};

const circle: Ellipse = {
	id: "id2",
	point1: { x: 2, y: 12 },
	point2: { x: 12, y: 2 },
	color: "FF0000",
	borderThickness: 2,
	colorBorder: "#A5A3A3",
	text: {
		id: "",
		point1: { x: 0, y: 0 },
		point2: { x: 1, y: 1 },
		type: "text",
		chars: [],
		chosenChars: [],
		alignment: "Without",
		angelRotate: 0,
	},
	opacity: 100,
	angelRotate: 0,
	type: "ellipse",
	radius: 5,
	Centre: { x: 7, y: 7 },
};

const rectangle: Rectangle = {
	id: "id3",
	color: "#4AE613",
	borderThickness: 2,
	colorBorder: "#A0A59E",
	text: {
		id: "",
		type: "text",
		point1: { x: 20, y: 10 },
		point2: { x: 30, y: 0 },
		chars: [],
		chosenChars: [],
		alignment: "Without",
		angelRotate: 0,
	},
	opacity: 100,
	angelRotate: 0,
	point1: { x: 20, y: 10 },
	point2: { x: 30, y: 0 },
	type: "rectangle",
};

const equilTriangle: EquilTriangle = {
	id: "id4",
	point1: { x: 0, y: 5 },
	point2: { x: 5, y: 0 },
	color: "",
	borderThickness: 1,
	colorBorder: "#000000",
	text: {
		id: "",
		type: "text",
		point1: { x: 1, y: 2 },
		point2: { x: 4, y: 1 },
		chars: [],
		chosenChars: [],
		alignment: "Without",
		angelRotate: 0,
	},
	opacity: 100,
	angelRotate: 0,
	type: "equilTriangle",
	trianglePoint1: { x: 0, y: 0 },
	trianglePoint2: { x: 5, y: 0 },
	trianglePoint3: { x: 2.5, y: 4.33 },
}

const rightTriangle: RightTriangle = {
	id: "id5",
	point1: { x: 4, y: 8 },
	point2: { x: 6, y: 6 },
	color: "#F3FF00",
	borderThickness: 3.5,
	colorBorder: "#F3FF00",
	text: {
		id: "",
		type: "text",
		point1: { x: 4, y: 7 },
		point2: { x: 5, y: 6 },
		chars: [],
		chosenChars: [],
		alignment: "Without",
		angelRotate: 0,
	},
	opacity: 100,
	angelRotate: 0,
	type: "rightTriangle",
	trianglePoint1: { x: 4, y: 6 },
	trianglePoint2: { x: 4, y: 8 },
	trianglePoint3: { x: 6, y: 6 },
}

const imageBlock: ImageBlock = {
	id: "id6",
	point1: { x: 100, y: 100 },
	point2: { x: 150, y: 125 },
	type: "image",
	urlStr: "https://m.media-amazon.com/images/I/31enPn7dN+L.jpg",
};

const backgroundColor: BackColor = {
	type: "backColor",
	color: "#699DF9",
}

const slide1: Slide = {
	id: "slide1",
	background: backgroundColor, // надо уточнить, я хз как
	elements: [textBlock, circle, rectangle],
	chosenElements: [],
	transition: 0,
	animations: [],
}

const presentation: Presentation = {
	name: "React",
	slides: [slide1],
}

const user: MainEditor = {
	presentation: presentation,
	chosenSlideIds: [],
	history: [],
	viewingMode: "editor",
}