odule.exports = {
    // the helper method 'format_time' will take in a timestamp and return a string with only the time
    format_time: (date) => {
      // We use the 'toLocaleTimeString()' method to format the dare as D:M:YYYY
      return date.toLocaleDateString();
    },
  };