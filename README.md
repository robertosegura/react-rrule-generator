# React RRule Generator
> Recurrence rules generator form built with React

[![LICENSE](https://img.shields.io/npm/l/express.svg)](LICENSE)
![Screenshot](https://i.imgur.com/FU3aGlz.png)

## Description

This is [ReactJS](http://facebook.github.io/react/index.html) project based on [Create React Library](https://github.com/UdiliaInc/create-react-library) and using Material UI styling. It's built with the help of a great [rrule.js](https://github.com/jakubroztocil/rrule) library.

It also uses:
* [lodash](https://github.com/lodash/lodash)
* [moment](https://github.com/moment/moment)

## Original Demo
https://fafruch.github.io/react-rrule-generator

## Installation

`npm install --save react-rrule-generator`

## Usage 

```js
import RRuleGenerator from 'react-rrule-generator';

// render it as it is

const SimpleRender = () => (
  <RRuleGenerator onChange={({rrule}) => console.log(`RRule changed, now it's ${rrule}`)} />
);


// or with your own forms configuration

import MyCustomCalendar from './MyCustomCalendar';

const CustomizedRender = () => (
  <RRuleGenerator
    onChange={({rrule}) => console.log(`RRule changed, now it's ${rrule}`)}
    config={{
      repeat: ['Monthly', 'Weekly'],
      yearly: 'on the',
      monthly: 'on',
      end: ['Never', 'On date'],
      weekStartsOnSunday: true,
      hideError: true,
    }}
  />
);


// you can also use it as controlled input component and feed it with your own RRule!

class ControlledRender extends Component {
  state = {
    rrule: 'SOME REALLY COOL RRULE'
  };

  render() {
    return (
      <RRuleGenerator
        onChange={({rrule}) => this.setState({ rrule })}
        value={this.state.rrule}
      />
    );
  }
}
```

## API

### Props

| Name         | Type    | Description |
| ------------ | ------- | ----------- |
| **onChange** | `function` | <b>REQUIRED.</b> Callback trigger when the RRule changes. The callback receives newly generated RRule `string`.
| **value** | `string` | You can pass your own RRule value to RRuleGenerator and use it like controlled input component.
| **config** | `object` | Accepts object of what options will be rendered. This object's structure is described in [#config](#config)
<br />

### config
`config` is an object which accepts following:

| Name         | Type    | Description |
| ------------ | ------- | ----------- |
| **frequency** | `array` of `string` | You can optionally choose if you want to show repeating options `'Yearly'`, `'Monthly'`, `'Weekly'`, `'Daily'`, `'Hourly'`. You can pass for example `['Monthly', 'Weekly']` if you want to show only options for repeating monthly and weekly. |
| **yearly** | `string` | If `'on'` provided, only choosing a particular day of a month is available, if `'on the'` is provided, you have ability to choose for example 'fourth Wednesday of February' |
| **monthly** | `string` | If `'on'` provided, only choosing a particular day of a month is available, if `'on the'` is provided, you have ability to choose for example 'fourth Wednesday' |
| **end** | `array` of `string` | You can optionally choose if you want to show ending options `'Never'`, `'After'`, `'On date'`. You can pass for example `['Never', 'On date']` if you want to show only options for ending never or on a particular date without showint 'After' option. |
| **hideStart** | `boolean` | If `true` start date form is not rendered. Default: `true` |
| **hideEnd** | `boolean` | If `true` ending form is not rendered. Default: `false` |
| **hideError** | `boolean` | If `true` error alert is not rendered. Default: `false` |
| **weekStartsOnSunday** | `boolean` | If set to `true`, weeks starts on Sunday (both for views and RRule string). Default: `false` |

## License 
MIT
