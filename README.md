# Readme

This is a repo for example files for education on javascript (uses es6).

## Visual Studio Code Setup

Install visual studio code

Install "Code Runner" extension

Install "jshint" extension

Install "vetur" extension

Install ["npm"](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) extension

Copy .jshintrc into root folder

Create directory .vscode and copy launch.json file into it

In visual studio code, press ctrl-shift-p and type "preferences", then `Preferences: Open User Settings`

Insert there

```js
{
    "code-runner.saveFileBeforeRun": true,
    "code-runner.clearPreviousOutput": true,
    "code-runner.executorMap": {
        "javascript": "node --harmony"
    }
}
```