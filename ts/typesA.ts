import { TextBlock, Ellipse, Rectangle, GraphicObject } from "./types";
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
			color: "black",
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
	type: "graphics",
	color: "red",
	borderThickness: 2,
	colorBorder: "grey",
	text: {
		id: "id2",
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
	radius: 5,
	point1: { x: 10, y: 10 },
	point2: { x: 0, y: 0 },
	Centre: { x: 7, y: 7 },
};

const rectangle: Rectangle = {
	id: "id3",
	type: "graphics",
	color: "green",
	borderThickness: 2,
	colorBorder: "grey",
	text: {
		id: "id2",
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
};
