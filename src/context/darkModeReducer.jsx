const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        darkMode: true,
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }

    case "TOGGLE_SIDEBAR": {
      return { ...state, sidebarOpen: !state.sidebarOpen };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
