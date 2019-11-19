export const setTitle = (newTitle, oldTitle, dispatch) => {
    if(newTitle !== oldTitle) {
        dispatch({
            type: "SET_PAGE_TITLE",
            payload: newTitle
        });
    };
};

export const search = (str, substr) => (
    str.toLowerCase().includes(substr.toLowerCase())
);