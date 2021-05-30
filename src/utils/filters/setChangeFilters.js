export const setChangeFilters = (filter, selectedFilters, localStorageKey) => {
  if (selectedFilters.indexOf(filter) > -1) {
    selectedFilters.splice(selectedFilters.indexOf(filter), 1);
  } else {
    selectedFilters.push(filter);
  }

  localStorage.setItem(localStorageKey, JSON.stringify(selectedFilters));
};
