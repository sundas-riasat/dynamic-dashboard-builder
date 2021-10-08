# Dynamic Dashboard Builder Plugin Using Javascript

This is a Javascript plugin that you can import into your html files and use as dynamic dashboard builder.

## Installation

Import the `script.js` file using html script tag in your html file and provide `dashboard` class to the wrapper div. You can provide configurations of your plugins in the `config.json` file.

## Dependencies

The plugin is dependent on JQuery, Bootstrap and ChartJS.

## Usage

A config.json file is required to configure the widgets of this plugin. The config file contains an array of object where each object is a configuration for a widget. The object structure looks like this:

```
{
    "type": "html",
    "title": "",
    "order": 3,
    "position": {
        "width": 300
    },
    "dataset": "<h3>preformatted</h3><p>Text in a pre elementis displayed in a fixed - widthfont,and it preserves both spaces and line breaks </p>",
    "priority": 1
}
```

There are 5 supported widget types in this plugin:

1. pie-chart
2. bar-chart
3. line-chart
4. polararea-chart
5. html
