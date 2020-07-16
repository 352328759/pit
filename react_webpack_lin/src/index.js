// "react": "^16.13.1",
// "react-dom": "^16.13.1",
import React from "react"
import { render } from "react-dom"
import App from "./components/App"

window.React = React

render(
	<App></App>,
	document.getElementById("react-container")
)