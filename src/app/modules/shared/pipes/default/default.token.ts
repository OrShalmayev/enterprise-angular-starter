import {InjectionToken} from "@angular/core";
import {TDefaultPipeType} from "./default.pipe";

export const DEFAULT_PIPE_TYPE = new InjectionToken<TDefaultPipeType>(
    'DEFAULT_PIPE_TYPE'
);
