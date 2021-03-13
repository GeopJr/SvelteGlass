browser.runtime.onMessage.addListener(function (msg, sender) {
  if (msg.action === "changeIcon") {
    if (!msg.svelte) return;
    const currentTab = sender.tab && sender.tab.id ? sender.tab.id : false;
    if (!currentTab) {
      chrome.tabs.query({ active: true, currentWindow: true }, function ([tab]) {
        changeIcon(tab.id)
      })
    } else {
      changeIcon(currentTab)
    }
  }
})

function changeIcon(tabId) {
  chrome.browserAction.setIcon({
    tabId: tabId,
    path: {
      "48": `../icons/icon-48.png`,
      "96": `../icons/icon-96.png`,
      "128": `../icons/icon-128.png`,
      "256": `../icons/icon-256.png`,
      "512": `../icons/icon-512.png`
    }
  })
}
