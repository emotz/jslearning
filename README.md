# Readme

This is a repo for example files for education on javascript (uses es6).

## Visual Studio Code Setup

Install visual studio code

Install "Code Runner" extension

Install "jshint" extension

Copy .vscode/launch.json into new folder

In visual studio code, press ctrl-shift-p and type "preferences", then open settings file

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