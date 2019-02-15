/*
 * Actions
 */

export const SET_NAVIGATED_LINK = "SET_NAVIGATED_LINK";

/*
 * Action creators
 */

export function setNavigatedLink(link) {
  return {
    type: SET_NAVIGATED_LINK,
    payload: link
  };
}
