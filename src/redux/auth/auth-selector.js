export const selectorToken = state => state.auth.token;
export const selectorName = state => state.auth.user.name;
export const selectorEmail = state => state.auth.user.email;
export const selecrotFetching = state => state.auth.isLoading;
