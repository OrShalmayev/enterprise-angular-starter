import { Inject, Optional, Pipe, PipeTransform } from '@angular/core';
import { DEFAULT_PIPE_TYPE } from './default.token';

/**
 * @parameter { T (any) } value - Original value
 * @parameter { R (any) } defaultValue - Value that will replace
 * @parameter { DefaultPipeType } type? - verification type
 * @option 'loose' - will do a simple check (!!value ? value : default)
 * @option 'strict' - will do a check just to see if it is null or undefined (value ?? default)
 */

export type TDefaultPipeType = 'loose' | 'strict';

@Pipe({ name: 'default' })
export class DefaultPipe implements PipeTransform {
    constructor(@Optional() @Inject(DEFAULT_PIPE_TYPE) private defaultPipeType: TDefaultPipeType) {}

    transform<T = any, R = any>(value: T, defaultValue: R, type?: TDefaultPipeType): T | R {
        type ??= this.defaultPipeType;
        return type === 'strict' ? value ?? defaultValue : !!value ? value : defaultValue;
    }
}
