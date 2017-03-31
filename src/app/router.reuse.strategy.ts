import {RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle} from "@angular/router";


export class CustomReuseStrategy implements RouteReuseStrategy {

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        //should never be called, since we are not reusing routes
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        return null;
        //should never be called, since we are not reusing routes
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return false;
    }

}