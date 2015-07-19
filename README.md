# ng-data
Load posts and route to each post with ui-router.

## Requirements

- Node, npm: Latest Version

## Setup

`npm run setup`

## Tasks

- `npm start`: starts the development environment.
- `npm stop`: stops all the processes that are in the background.
- `npm run build`: Builds the project.
- `npm test`: coming soon ...

For more tasks, check out the `package.json` file in the root of the app.

## Arcitechture

Client totallt separated from the server.

### Client

Components are organized by feature. Currently there is only one feature: posts.

Everything related to that feature is stored in that folder. Also, note that since we are using webpack, it is very flexible to change the project structure.

And the router folder is pretty much self-explanatory.

	client
	├── .DS_Store
	├── app
	│   ├── .DS_Store
	│   ├── index.es
	│   ├── index.html
	│   ├── lib
	│   │   ├── .DS_Store
	│   │   └── selector
	│   │       ├── index.es
	│   │       ├── plugins.es
	│   │       └── selector.es
	│   ├── posts
	│   │   ├── .DS_Store
	│   │   ├── posts.components.es
	│   │   ├── posts.css
	│   │   ├── posts.module.es
	│   │   └── posts.tpl.html
	│   └── router
	│       ├── .DS_Store
	│       ├── 404.html
	│       ├── index.es
	│       ├── posts.details.tpl.html
	│       ├── posts.layout.tpl.html
	│       └── posts.list.tpl.html
	├── dev-server.js
	├── package.json
	├── tasks
	│   ├── openPage.js
	│   └── run.js
	└── webpack.config.js

### Server

At this point, the server just serves the application and doesn't do anything crazy.

	server
	├── .DS_Store
	├── app
	│   ├── .DS_Store
	│   └── index.js
	└── package.json