import 'reflect-metadata';
import {MetadataKeys} from './MetadataKeys';
import {RequestHandler} from 'express';

export function use(middleware: RequestHandler) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        console.log('use decorator')
        const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
        desc.enumerable = true;
        Reflect.defineMetadata(MetadataKeys.middleware, [...middlewares, middleware], target, key);
    };
}
