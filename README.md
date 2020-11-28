# Clasp Typescript Template

Template for develop google app script with typescript and webpack.

## Create gs file on google drive

```
clasp create --title { project_name } --rootDir "./dist"
```

It will be generated `.clasp.json` & `./dist/appsscript.json` as below.

```json
// .clasp.json
{
  "scriptId": "******-***************************************************",
  "rootDir": "./dist"
}
```

```json
// ./dist/appsscript.json
{
  "timeZone": "America/New_York",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

## push on local file to google drive with webpack bundle

```
npm run deploy
```
