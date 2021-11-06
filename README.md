# IF.Japanese

This repository presents frontend application for my Japanese APP

@TODO Readme

<!--

---

## Table of contents


---

## Data schema description

### Vocab

#### Verbs

- general schema:

```
  {
    "vocab": "降る",
    "meaning": "ふる", // when 2 readings
    "known": false,
    "inProgress": true,
    "nowLearning": false,
    "pitch": "",
    "antonyms": "入る",
    "classifier": true,
    "level": 0,
    "examples": [
        "同じタイミングで言ってみました。"
    ],
    "additionalExplanation": [
        "椅子の上を立つ。椅子に乗る。"
    ],
    "problems": [
      {
        "problem": "食事 is suru verb, that's why we can say:「食事します」 or 「食事をします」. Not 「食事を食べる」.",
        "frequency": 1, // from 1 - 10
        "resolved": false,
        "info": [
          "I did that only once so far."
        ]
      }
    ]
    "verb": {
        "main": "降",
        "verbGroup": "2|special1|special2|u|ku|gu|su|tsu|bu|mu|nu|ru",
        "verbType": "intransitive|transitive|other"
    }
}
```

`special1` suru verb  
`special2` kuru verb

- suru verb schema

```
{
    "vocab": "集中",
    ...
    "verb": {
        "main": "集中",
        "verbGroup": "special1",
        "verbType": "transitive"
    }
}

```

## Description
- **`inProgress`** - probably can say or guess meaning or reading, often confused about one or both (need to say at least 10 times before moving it to `nowLearning`)
- **`nowLearning`:** - last step of learning, when can very fast read it and say meaning 3 times before can move it to `known`. (If made mistake, move to  `inProgress`)
- **`known`:** - Can read and know meaning, can use

---

## Development

### Requirements



### Installation

1. Clone project from GitHub repository `git clone git@github.com:furdzik/if.japanese.git` or `git clone https://github.com/furdzik/if.japanese.git`
2. Add alias to your `hosts` file: `127.0.0.1         if.japanese.local`
3. `cd if.japanese`
5. Install dependencies `npm install`

### Running

Run

```sh
npm start
```

for starting dev server. Navigate to `http://if.japanese.local:2017/`. The app will automatically reload if you change any of the source files.

### Build

Run

```sh
npm run build
```

to build project.

\* The build artifacts will be stored in the `dist/` directory.

To run project locally run

```sh
cd dist
```

### Updating packages

Package.json is strictly connected with package-lock.json. Updating package should have reflection in package-lock. Also take care of installing exactly specified package version (see package.json [suffix](https://docs.npmjs.com/files/package.json#dependencies))

-->
