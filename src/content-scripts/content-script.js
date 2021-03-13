const doc = document.documentElement.outerHTML
const info = {}

import Data from "@/assets/frameworks.json"

info["frameworks"] = Data

const message = {
    svelte: false,
    sapper: false,
    uiFramework: ""
}

for (let type in info) {
    for (let key in info[type]) {
        const regex = new RegExp(info[type][key].regex, "i");
        const matches = regex.test(doc)
        if (type === "ui" && matches && (message.svelte || message.sapper)) {
            message["uiFramework"] = info[type][key].name
        } else if (type !== "ui") {
            message[key] = matches
        }
    }
}

const tmpObj = {}
tmpObj[location.href] = message

chrome.storage.local.set(tmpObj)
chrome.runtime.sendMessage({
    action: "changeIcon",
    svelte: message.svelte || message.sapper
});