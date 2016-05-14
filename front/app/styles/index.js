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
    },
    "link-b": {
        "color": "#3366cc"
    },
    "link-g": {
        "color": "#333333"
    },
    "link-g-l": {
        "color": "#cccccc"
    },
    "link-g-h": {
        "color": "#333333"
    },
    "navbar__menu-line": {
        "width": "100%",
        "height": 63,
        "fontWeight": "bold",
        "fontSize": 1.5 * vmax
    },
    "navbar__logo": {
        "width": "10%",
        "height": "100%",
        "float": "left",
        "marginLeft": "3%",
        "marginRight": "3%"
    },
    "navbar__logo-img": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "navbar__menu": {
        "width": "84%",
        "height": "100%",
        "float": "left",
        "overflow": "hidden",
        "whiteSpace": "nowrap"
    },
    "navbar__menu-item": {
        "listStyle": "none",
        "boxSizing": "border-box",
        "height": "100%",
        "float": "left",
        "marginTop": 0,
        "marginRight": "3%",
        "marginBottom": 0,
        "marginLeft": "3%"
    },
    "navbar__menu-item-right": {
        "listStyle": "none",
        "height": "100%",
        "float": "right",
        "marginRight": "5%",
        "color": "#3366cc"
    },
    "navbar__menu-item-right:visited": {
        "color": "#3366cc"
    },
    "navbar__form-wrapper": {
        "width": "100%",
        "height": 250,
        "backgroundImage": "url(../images/navbar-bg.jpg)",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "position": "relative"
    },
    "navbar__form": {
        "width": 440,
        "height": 140,
        "position": "absolute",
        "top": 0,
        "bottom": 0,
        "left": 0,
        "right": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "navbar__form-title": {
        "color": "white",
        "fontSize": 36,
        "width": "100%",
        "textAlign": "center",
        "marginBottom": 20,
        "marginTop": 10
    },
    "navbar__form-input": {
        "width": "100%",
        "height": 40,
        "lineHeight": 40,
        "fontSize": 24,
        "backgroundColor": "#cccccc",
        "border": "none",
        "borderRadius": 5,
        "paddingLeft": 10,
        "boxSizing": "border-box",
        "color": "#666666",
        "marginBottom": 30
    },
    "navbar__form-submit": {
        "width": 180,
        "height": 42,
        "fontSize": 24,
        "fontWeight": "bold",
        "color": "white",
        "backgroundColor": "#3366cc",
        "border": "none",
        "borderRadius": 5,
        "cursor": "pointer"
    },
    "blog-wrapper": {
        "fontFamily": "DroidBold, sans-serif"
    },
    "blog__menu-line": {
        "width": "100%",
        "height": 40,
        "backgroundColor": "#666666"
    },
    "blog__menu": {
        "width": "75%",
        "marginLeft": "3%",
        "height": "100%",
        "float": "left",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "fontSize": 20,
        "fontWeight": "bold"
    },
    "blog__menu-item": {
        "listStyle": "none",
        "height": "100%",
        "float": "left",
        "marginTop": 0,
        "marginRight": "1%",
        "marginBottom": 0,
        "marginLeft": "1%",
        "paddingLeft": "1%",
        "paddingRight": "1%",
        "borderTopRightRadius": 5,
        "borderTopLeftRadius": 5
    },
    "blog__menu-item-right": {
        "listStyle": "none",
        "height": "100%",
        "float": "right",
        "marginRight": "5%",
        "color": "#3366cc"
    },
    "blog__search-wrapper": {
        "width": "20%",
        "float": "left",
        "height": "100%"
    },
    "blog__search": {
        "width": "100%",
        "height": 30,
        "backgroundColor": "#f2f6f4",
        "border": "none",
        "borderRadius": 5,
        "minWidth": 50,
        "backgroundImage": "url(../images/search.png)",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "95% center",
        "boxSizing": "border-box",
        "paddingLeft": "5%",
        "paddingRight": "15%",
        "cursor": "pointer",
        "fontSize": 16,
        "color": "#666666"
    },
    "active": {
        "backgroundColor": "white !important",
        "textDecoration": "underline"
    },
    "active a": {
        "color": "#3366cc !important"
    },
    "ace_editor": {
        "height": 200
    },
    "blog__main": {
        "width": "75%",
        "float": "left"
    },
    "blog__rightPanel": {
        "width": "25%",
        "float": "left",
        "boxSizing": "border-box",
        "marginTop": 35,
        "paddingLeft": 25,
        "paddingRight": 25,
        "borderLeft": "1px solid #d2d2d2"
    },
    "rightPanel-title": {
        "fontSize": 24,
        "color": "#3a3434",
        "fontWeight": "bold",
        "paddingBottom": 10
    },
    "rightPanel__menu": {
        "marginBottom": 30
    },
    "rightPanel__menu-item": {
        "marginTop": 15,
        "listStyle": "none",
        "fontSize": 20,
        "fontWeight": "bold"
    },
    "activePanel a": {
        "color": "#3366cc !important"
    },
    "rightPanel-title-little": {
        "color": "#7a7a7a",
        "fontSize": 18,
        "width": "100%",
        "textAlign": "center",
        "marginTop": 20,
        "marginBottom": 5
    },
    "social-button__svg": {
        "width": 30,
        "marginTop": 3,
        "marginRight": 3,
        "marginBottom": 3,
        "marginLeft": 3
    },
    "social-buttons": {
        "textAlign": "center",
        "marginTop": 10,
        "marginBottom": 10
    },
    "rightPanel__article-block": {
        "width": "100%",
        "height": 65,
        "paddingTop": 10,
        "paddingBottom": 10
    },
    "rightPanel__article-img-wrapper": {
        "width": "20%",
        "float": "left"
    },
    "rightPanel__article-img": {
        "maxWidth": "100%",
        "height": "auto"
    },
    "rightPanel__article-text": {
        "width": "80%",
        "float": "left",
        "boxSizing": "border-box",
        "paddingLeft": "5%"
    },
    "rightPanel__article-tittle": {
        "fontSize": 20,
        "width": "100%",
        "textAlign": "left",
        "marginBottom": 3
    },
    "rightPanel__article-decr": {
        "fontSize": 18,
        "width": "100%",
        "textAlign": "left"
    },
    "blog__title": {
        "width": "100%",
        "textAlign": "center",
        "fontSize": 24,
        "color": "#050505",
        "paddingTop": 25,
        "paddingBottom": 20
    },
    "footer": {
        "backgroundColor": "#ccc",
        "textAlign": "center",
        "paddingTop": 30,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0
    },
    "container": {
        "maxWidth": 1280,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": "3%",
        "paddingBottom": 0,
        "paddingLeft": "3%",
        "boxSizing": "border-box"
    },
    "footer__column_left": {
        "textAlign": "left",
        "float": "left"
    },
    "footer__column_right": {
        "textAlign": "left",
        "float": "right"
    },
    "footer__nav": {
        "display": "inline-block",
        "verticalAlign": "top"
    },
    "footer-nav:first-child": {
        "marginRight": 90
    },
    "footer-nav__list": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyleType": "none",
        "fontSize": 1
    },
    "footer-nav__item:not(footer-nav__item_bold)": {
        "marginBottom": 3
    },
    "footer-nav__item_bold": {
        "fontWeight": "bold",
        "marginBottom": 10
    },
    "footer-nav__link": {
        "color": "#545151",
        "textDecoration": "none"
    },
    "footer__column_center": {
        "display": "inline-block",
        "textAlign": "center",
        "paddingTop": 15,
        "color": "#545151",
        "fontSize": 1.1
    },
    "footer__nav_center:first-child": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "footer__icons-list": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyleType": "none"
    },
    "social-icons__item": {
        "display": "inline-block",
        "marginLeft": 5,
        "verticalAlign": "middle"
    },
    "social-icons__item:first-child": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "social-icons__svg": {
        "width": 30,
        "height": 30
    }
});