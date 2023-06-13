import { connect } from "react-redux";
import Update from "../components/Update";

export default connect(
  function(state) {
    let id, title, desc
    for (let i=0; i<state.contents.length; i++) {
      let d = state.contents[i];
      if (d.id === state.selected_content_id) {
        id = d.id
        title = d.title;
        desc = d.desc;
        break;
      }
    }
    return {
      id,
      title,
      desc
    }
  },
  function(dispatch) {
    return {
      onSubmit: function(id, title, desc) {
        dispatch({type: 'UPDATE_PROCESS', id, title, desc})
      }
    }
  }
)(Update);
