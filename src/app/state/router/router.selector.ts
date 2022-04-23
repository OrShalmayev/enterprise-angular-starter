import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IRouterStateUrl } from "./custome-serializer";

export const getRouterState = createFeatureSelector<RouterReducerState<IRouterStateUrl>>('router');

export const getCurrentRoute =  createSelector(getRouterState, router => {
    return router?.state;
})
