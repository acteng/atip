import type { EventHandler } from "./types";

export class DefaultEventHandler implements EventHandler {
    constructor() {
        this.mapHandlers = {
            click: () => { },
            dblclick: () => { },
            mousemove: () => { },
            mousedown: () => { },
            mouseup: () => { },
            dragstart: () => { },
        };
        this.documentHandlers = {
            click: () => { },
            keyPress: () => { },
            keyUp: () => { },
            keyDown: () => { },
        }
    };

    mapHandlers: { click: () => void; dblclick: () => void; mousemove: () => void; mousedown: () => void; mouseup: () => void; dragstart: () => void; };

    documentHandlers: { click: () => void; keyPress: () => void; keyUp: () => void; keyDown: () => void; };
}