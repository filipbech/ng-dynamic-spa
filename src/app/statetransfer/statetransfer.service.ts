import { Injectable } from '@angular/core';

@Injectable()
export class StatetransferService {
    private _cache = {};

    dehydrate() {
        return JSON.stringify(this._cache);
    }

    rehydrate(jsonstring: string = "{}") {
        try {
            const incoming = JSON.parse(jsonstring);
            Object.keys(incoming).forEach(key => {
                this.put(key, incoming[key]);
            });
        } catch (e) {
          console.error(e);
        }
    }

    put(key:string, val:any) {
        //clone object - only put in cache if val can be serialized
        try {
            this._cache[key] = JSON.parse(JSON.stringify(val));
        } catch(e) {}
    }

    get(key) {
        return this._cache[key];
    }

    getAndForget(key) {
        let cache = this._cache[key];
        delete this._cache[key];
        
        return cache;
    }

    delete(key) {
        delete this._cache[key];
    }
}