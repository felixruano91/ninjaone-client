Installation:
------------

```bash
$ npm install
```

Once the dependencies are installed, be sure to add ```env.local``` file at the root of the project,
this file should contain the env variable ```VITE_NINJA_API_URL``` set to ```http://localhost:3000```.

**IMPORTANT**: You should clone [this repo](https://github.com/NinjaRMM/devicesTask_serverApp) and follow the instruction in the
```README.md``` to get it running locally. That project should be running locally for the requests to work in the client.

Run:
------------

```bash
$ npm run vite
```

Test Watch Mode:
------------

```bash
$ npm run test
```

Test Coverage:
------------

```bash
$ npm run coverage
```

Packages:
-----------

| Package                                                                                | Version |
|----------------------------------------------------------------------------------------|:--------|
| [vite](https://vitejs.dev)                                                             | 4.0.0   |
| [vitest](https://vitest.dev)                                                           | 0.28.3  |
| [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro) | 13.4.0  |
| [chakra-ui](https://chakra-ui.com)                                                     | 2.4.9   |
| [axios](https://axios-http.com)                                                        | 1.3.0   |
| [react-query](https://react-query-v3.tanstack.com)                                     | 3.39.3  |
| [react-hook-form](https://react-hook-form.com)                                         | 7.43.0  |
