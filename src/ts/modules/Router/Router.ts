import { Block } from "../Block/Block";
import { Route } from "./components/Route";

export class Router {
    public routes!: Route<typeof Block>[];
    public history!: History;
    protected _currentRoute!: Route<typeof Block>|null;
    protected _rootQuery!: string;
    private static __instance: Router;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    public use<T>(pathname: string, block: T) {
        const route = new Route(pathname, block as typeof Block, {rootQuery: this._rootQuery});

        this.routes.push(route);

        return this;
    }

    start() {
        window.onpopstate = ((event: PopStateEvent) => {
            this._onRoute((event.currentTarget as Window).location.pathname);
        }).bind(this);

        this._onRoute(window.location.pathname);
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        this._currentRoute = route;
        route.render();
    }

    public go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    public back() {
        this.history.back();
    }

    public forward() {
        this.history.forward();
    }

    private getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}
