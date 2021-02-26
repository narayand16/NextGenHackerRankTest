# Navigation Bar

## Environment 
- Angular CLI Version: 10.0.4
- Angular Core Version: 10.0.4
- Node Version: 12(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/I6El9Mc6YIPHVyHHMA3VjQ/navigation-bar.gif)

## Functionality Requirements

The component has the following functionalities:

- There are 4 tabs: `Home`, `News`, `Contact`, `About`.

- The default selected tab is the `Home` tab.

- Clicking on a tab renders the relevant content.
  - Clicking on the Home tab renders the content `HOME PAGE`.
  - Clicking on the News tab renders the content `NEWS PAGE`.
  - Clicking on the Contact tab renders the content `CONTACT PAGE`.
  - Clicking on the About tab renders the content `ABOUT PAGE`.

- Since the default selected tab is the `Home` tab, the default displayed content is `HOME PAGE`.

## Testing Requirements

- The `Home` tab has the data-test-id attribute `home-navigation-tab`.
- The `News` tab has the data-test-id attribute `news-navigation-tab`.
- The `Contact` tab has the data-test-id attribute `contact-navigation-tab`.
- The `About` tab has the data-test-id attribute `about-navigation-tab`.
- The content section has the data-test-id attribute `tab-content`.

## Project Specifications

**Read Only Files**
- src/app/app.component.spec.ts
- src/app/navigationBar/navigationBar.component.spec.ts

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
