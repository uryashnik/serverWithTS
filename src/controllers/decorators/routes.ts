import 'reflect-metadata';
import {Methods} from './Methods';
import {MetadataKeys} from './MetadataKeys';

// export function post(path: string){
//     return function(target: any, key: string, desc: PropertyDescriptor){
//         desc.enumerable = true;
//         Reflect.defineMetadata('path', path, target, key);
//         Reflect.defineMetadata('method', 'post', target, key);
//     }
// }

function routeBinder(method: string){
    return function (path: string){
        return function(target: any, key: string, desc: PropertyDescriptor){
            console.log('route decorator')
            desc.enumerable = true;
            Reflect.defineMetadata(MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys.method, method, target, key);
        }
    }
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
