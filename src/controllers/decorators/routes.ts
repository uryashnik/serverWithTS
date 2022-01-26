import 'reflect-metadata';

export function get(path: string){
    return function(target: any, key: string, desc: PropertyDescriptor){
        desc.enumerable = true;
        Reflect.defineMetadata('path', path, target, key);
    }
}