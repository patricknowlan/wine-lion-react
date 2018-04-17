import axios from "axios";

const BASEURL = "http://www.tannins.io/api/wineries";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getWineries: function() {
    return axios.get(BASEURL);
  }
};
