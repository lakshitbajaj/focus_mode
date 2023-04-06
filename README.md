# Focus Mode

A simple focus mode extension for Chrome-based browsers.

## How to Use

1. Download both the `manifest.json` and `background.js` files and save them in a folder named `focus_mode`.
2. Open Chrome and navigate to the `chrome://extensions` page.
3. Enable `Developer mode` by toggling the switch in the top right corner.
4. Click the `Load unpacked` button in the top left corner and select the `focus_mode` folder where you saved your files.

The extension should now be installed and active. If you try to access any of the specified websites during focus mode, you should be redirected to one of the specified URLs alternatively.

To add the extension to Microsoft Edge, follow these steps:

1. Open Microsoft Edge and click on the three horizontal dots in the top right corner to open the menu.
2. Click on `Extensions` in the menu to open the `Extensions` page.
3. Enable `Developer mode` by toggling the switch in the bottom left corner.
4. Click the `Load unpacked` button in the top left corner and select the `focus_mode` folder where you saved your files.

The extension should now be installed and active in Microsoft Edge as well.

## Customization

You can customize the list of blocked websites and redirect URLs by editing the `background.js` file. The blocked websites are specified in the `if` statement inside the `chrome.webRequest.onBeforeRequest.addListener` function. The redirect URLs are specified in the `redirectUrls` array at the top of the file.

After making any changes to the `background.js` file, make sure to save it and reload the extension on the `chrome://extensions` page (for Chrome) or on the `Extensions` page (for Microsoft Edge) for the changes to take effect.
