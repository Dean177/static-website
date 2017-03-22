# Serve static websites

- Run `npm install`
- Put your files in /public
- Run `npm start`
- Go to (http://localhost:8000/)

By default the 'public' directory will be served on port 8000, this is customizable by supplying command line arguments e.g.
```
./index.js --path /path/to/directory --port 3210
```

All the files, folders and subfolders will be available and if there is an index.html files present in the root folder, that will be served up at `'/'`
 