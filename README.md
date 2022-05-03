# NgrxBestPractice

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Folders architecture:
    src
    ├── app                    
    │   ├── app-layout           # app-layout is the main layout of the application
    │   ├── home                 # home is the home page of the application
    │   └── modules              # modules is the folder where all the modules are stored
    │       ├── @components      # @components is the folder where all the components are stored
    │       ├── @core              # @core is the folder where all the singletons are stored
    │       ├── @pages              # application pages
            ├── @preload              # module that preloads external packages
    │       ├── @theme              # theme folder
    │       ├── @shared              # shared components pipes directives and services
    │       └── ...
    │   ├── settings 
    │   ├── state
    │   ├── styles  
    |   └── ...
    └── ...