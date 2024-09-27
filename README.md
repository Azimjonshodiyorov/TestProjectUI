# TestProjectUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── post.service.ts
│   │   │   └── user.service.ts
│   │   └── models/
│   │       ├── post.model.ts
│   │       └── user.model.ts
│   ├── shared/
│   │   └── components/
│   │       └── navbar/
│   │           ├── navbar.component.html
│   │           ├── navbar.component.ts
│   │           └── navbar.component.css
│   ├── modules/
│   │   ├── auth/
│   │   │   └── login/
│   │   │       ├── login.component.html
│   │   │       ├── login.component.ts
│   │   │       └── login.component.css
│   │   ├── layout/
│   │   │   ├── layout.component.html
│   │   │   ├── layout.component.ts
│   │   │   └── layout.component.css
│   │   ├── post/
│   │   │   ├── post-list/
│   │   │   │   ├── post-list.component.html
│   │   │   │   ├── post-list.component.ts
│   │   │   │   └── post-list.component.css
│   │   │   ├── post-detail/
│   │   │   │   ├── post-detail.component.html
│   │   │   │   ├── post-detail.component.ts
│   │   │   │   └── post-detail.component.css
│   │   │   ├── post-form/
│   │   │   │   ├── post-form.component.html
│   │   │   │   ├── post-form.component.ts
│   │   │   │   └── post-form.component.css
│   │   ├── user/
│   │   │   ├── user-list/
│   │   │   │   ├── user-list.component.html
│   │   │   │   ├── user-list.component.ts
│   │   │   │   └── user-list.component.css
│   │   │   ├── user-detail/
│   │   │   │   ├── user-detail.component.html
│   │   │   │   ├── user-detail.component.ts
│   │   │   │   └── user-detail.component.css
│   │   │   ├── user-form/
│   │   │   │   ├── user-form.component.html
│   │   │   │   ├── user-form.component.ts
│   │   │   │   └── user-form.component.css
│   ├── app-routing.module.ts
│   ├── app.component.html
│   └── app.module.ts
