import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "white",
        "fontFamily": "DroidBold, sans-serif"
    },
    "a": {
        "textDecoration": "none"
    },
    "main-view::after": {
        "content": "''",
        "display": "block",
        "clear": "both"
    },
    "m-c": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center"
    }
});