# best-angular-starter

The best Angular starter for medium to large apps.

## Folders architecture:
    src
    ├── app                    
    │   ├── app-layout           # app-layout is the main layout of the application
    │   ├── home                 # home is the home page of the application
    │   └── modules              # modules is the folder where all the modules are stored
    │   │    ├── @components      # @components is the folder where all the components are stored
    │   │    ├── @core   
    │   │    │   ├── backend              # api and services
    │   │    │   ├── enums              
    │   │    │   ├── guards              
    │   │    │   ├── interceptors              
    │   │    │   ├── interfaces              
    │   │    │   ├── services              
    │   │    │   ├── utility              
    │   │    │   └── ...
    │   │    ├── @pages              # application pages
    │   │    ├── @preload              # module that preloads external packages
    │   │    ├── @theme              # theme folder
    │   │    ├── material              
    │   │    ├── shared              # shared components pipes directives and services
    │   │    └── ...
    │   ├── settings 
    │   ├── state
    │   ├── styles  
    |   └── ...
    └── ...
    
    
# Angular version

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.
