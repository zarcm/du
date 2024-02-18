# Acreboard notedown

Acreboard notedown is a Markdown Knowledge base application (FAQ) built with [Nodejs](https://nodejs.org/) and [ExpressJS](http://expressjs.com/). The application uses an embedded database ([nedb](https://github.com/louischatriot/nedb)) by default but can also use a MongoDB server by changing the config (see below). The application is designed to be easy to use and install and based around search rather than nested categories. Simply search for what you want and select from the results.

### Features

- **Search**: Acreboard notedown is a search based Knowledge base (FAQ) backed by [Lunr.js](https://github.com/olivernn/lunr.js/) indexing to create the best possible results on searches.
- **Backend**: Acreboard notedown uses the pure Javascript [nedb](https://github.com/louischatriot/nedb) embedded database by default or a MongoDB server.
- **Design/Themes**: Acreboard notedown is meant to be simple flat design. 
- **Responsive**: Acreboard notedown is built using Bootstrap allowing it to be responsive and work on all devices. 
- **Mermaid**: Acreboard notedown allows for [Mermaid](http://knsv.github.io/mermaid/) charts in articles.
- **Editor**: Acreboard notedown uses Markdown-it which is based off the [CommonMark spec](http://spec.commonmark.org/). This allows for the very best Markdown experience.
- **Image management**: Acreboard notedown allows for drag and drop of images into articles. The image is automatically uploaded to the server in the background. Google Chrome users can also paste images directly from the clipboard.