"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeViewingMode =
	exports.TypeAnimation =
	exports.TypeTransition =
	exports.Alignment =
		void 0;
var Alignment;
(function (Alignment) {
	Alignment[(Alignment["WithOut"] = 0)] = "WithOut";
	Alignment[(Alignment["Left"] = 1)] = "Left";
	Alignment[(Alignment["Centre"] = 2)] = "Centre";
	Alignment[(Alignment["Right"] = 3)] = "Right";
})(Alignment || (exports.Alignment = Alignment = {}));
var TypeTransition;
(function (TypeTransition) {
	TypeTransition[(TypeTransition["Default"] = 0)] = "Default";
	TypeTransition[(TypeTransition["Fading"] = 1)] = "Fading";
	TypeTransition[(TypeTransition["Scrolling"] = 2)] = "Scrolling";
})(TypeTransition || (exports.TypeTransition = TypeTransition = {}));
var TypeAnimation;
(function (TypeAnimation) {
	TypeAnimation[(TypeAnimation["Moving"] = 0)] = "Moving";
	TypeAnimation[(TypeAnimation["Appearing"] = 1)] = "Appearing";
})(TypeAnimation || (exports.TypeAnimation = TypeAnimation = {}));
var TypeViewingMode;
(function (TypeViewingMode) {
	TypeViewingMode[(TypeViewingMode["Editor"] = 0)] = "Editor";
	TypeViewingMode[(TypeViewingMode["SlideShow"] = 1)] = "SlideShow";
})(TypeViewingMode || (exports.TypeViewingMode = TypeViewingMode = {}));
