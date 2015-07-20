# ng-data
Load posts and route to each post with ui-router.

## Requirements

- Node, npm: Latest Version

## Setup

`npm run setup`

## Tasks

- `npm start`: starts the development environment, including watch for unit test.
- `npm stop`: stops all the processes that are in the background.
- `npm run build`: Builds the project.
- `npm test`: Run the test once
- `npm run test-dev`: runs the unit test and watch files.

For more tasks, check out the `package.json` file in the root of the app.

## Arcitechture

- Client totally separated from the server.
- Project organized in terms of feathres
- Application is component oriented (similar to Derby for example) which means that the entry point to each feature is a directive with the supporting module that contains controllers, services, etc ....
- `/list`: shows the posts. `/list/:id`: shows the details of each post. Now, there is not another ajax request to get the details. We are simply selecting what we want from the data that is already loaded. It is just not the best idea to send an ajax request every time we want the details of a post. It is more effecient to load what we need once and just pick and choose.
- There is an example for a unit test at `client/app/posts/test/posts.ctrl.test.es`. The great thing about webpack is that you don't have to worry about adding files to karma. They are just automagically handled by karma-webpack plugin.

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