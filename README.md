# IF.Japanese

This repository presents frontend application for my **Japanese APP**

---

## Data schema's description

### Vocab

- general json options:

```json
  {
    "vocab": "降る",
    "meaning": "ふる",
    "known": false,
    "inProgress": true,
    "nowLearning": false,
    "counter": {
      "counterGroup": "tsu"
    },
    "pitch": "",
    "antonyms": "入る",
    "level": 0,
    "examples": [
        "同じタイミングで言ってみました。"
    ],
    "additionalExplanation": [
        "椅子の上を立つ。椅子に乗る。"
    ],
    "problems": [
      {
        "problem": "食事 is suru verb, that's why we can say:「食事します」",
        "frequency": 1,
        "resolved": false,
        "info": [
          "I did that only once so far."
        ]
      }
    ],
    "verb": {
        "main": "降",
        "verbGroup": "ru",
        "verbType": "intransitive"
    }
}
```

### LEGEND

#### General

- **vocab** `required` - vocab name written in kanji
- **meaning** - when vocab has 2 readings, use `meaning` key to different one from another (write it in kana)
- **known** `required` - (see below)
- **inProgress** `required` - (see below)
- **nowLearning** `required` - (see below)
- **pitch** `required` - name of used pitch accent to pronounce it
- **antonyms** - if API don't hase `antonyms` for this word use this option instead
- **counter** - if word is a `counter` add `counterGroup` (see below)
- **level** `required` - JLPT level
- **examples** - array od examples
- **additionalExplanation** - array of additional explanation for this word
- **problems** - array of my problems with this word (when not resolved problems are in a word, know option should be as false)
- **verb** - is word is a verb, use this option (see below)

(Stick with this order)

#### Statuses
- **`inProgress`** - probably can say or guess meaning or reading, often confused about one or both (need to say at least 10 times before moving it to `nowLearning`)
- **`nowLearning`** - last step of learning, when can very fast read it and say meaning 3 times before can move it to `known`. (If made mistake, move to  `inProgress`)
- **`known`** - Can read and know meaning, can use


#### Verbs

- **main** `required` - main stream for a verb word (e.g. in `降る` it is `降`)

- **verbGroup** `required` - group of a verb. Possible options: 

  - `2` - second group
  - `special1` - suru verb
  - `special2` - kuru verb
  - `u` - godan verb with u ending 
  - `ku` - godan verb with ku ending
  - `gu` - godan verb with gu ending
  - `su` - godan verb with su ending
  - `tsu` - godan verb with tsu ending
  - `bu` - godan verb with bu ending
  - `mu` - godan verb with mu ending
  - `nu` - godan verb with nu ending
  - `ru` - godan verb with ru ending

- **verbType** `required` - type of verb. Possible options:
  - intransitive
  - transitive
  - other (when none from above)

#### Counter

- **reading** - only if counter has a special reading
- **counterGroup** `required` - group of counter. Possible options:
  - `default`
  - `k`
  - `s`
  - `t`
  - `h`
  - `f`
  - `p`
  - `r`
  - `w`

  - `ji`
  - `nichi`
  - `nin`
  -`tsu`
  -`sai`
  -`ke`
  -`so`

  - `maki` (間, 巻)
  - `sao`
  - `tsuu`
  - `tsui`
  - `zen`
  
---

## Development

### Requirements

- `NodeJS` >= v10.14.1  
- `npm` >= 6.4.1  
- `Git` Bash (for versioning)  

### Installation

- Clone project from GitHub repository
- Add alias to your `hosts` file: `127.0.0.1 if.japanese.local`
- `cd if.japanese`
- Install dependencies `npm install`

### Running

- Create `.env` files (see **WIKI** for more information)
- Use `npm start` for starting dev server.

Browser automatically open `http://if.japanese.local:2017/`.  
The app will automatically reload if you change any of the source files.

### Deploy to prod

- Copy `.env.prodaction` to `.env`
- Run `npm run build` to build project

\* The build artifacts will be stored in the `dist/` directory.

---

## Contributing

If you want to contribute read the [contributing guidelines]() before opening an issue [WIP].

---

## Style guide

I use my own style guidelines: [IF.Kamisama](https://github.com/furdzik/IF.Kamisama).
