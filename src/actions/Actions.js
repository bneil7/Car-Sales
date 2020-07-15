export const ADD_FEATURE = 'ADD_FEATURE';
export function addFeature(newFeature) {
    return {
        type: ADD_FEATURE,
        payload: newFeature
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export function removeFeature(featureID) {
    return {
        type: REMOVE_FEATURE,
        payload: featureID
    }
}